import React from 'react';
import '../scss/components/_add-ingredient.scss';
import Convert from 'convert-units';

class AddIngredientForm extends React.Component {
  constructor(props) {
    super(props);
    let volumeUnits = Convert().list('volume');
    this.units = volumeUnits.filter(measure => measure.system === 'imperial');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO: add cancel form button

  handleSubmit(event) {
    event.preventDefault();

    var ingredient = {
      amount: parseFloat(this.refs.amount.value),
      baseAmount: parseFloat(this.refs.amount.value),
      unit: this.units[this.refs.unit.value],
      name: this.refs.name.value,
    };

    if (this.props.editingIngredient !== null) {
      ingredient.id = this.props.editingIngredient.id;
    }

    // Only add ingredient if correct
    // TODO: add actually good checking/validation
    if(typeof ingredient === 'object' && ingredient.hasOwnProperty('name') && ingredient.name.length > 0) {
      this.props.submitIngredient(ingredient);
      this.refs.ingredientForm.reset();
      this.props.closeFormDisplay();
    }
  }

  render() {



    // console.log(imperialVolumeUnits);

    var amount, unit, name;

    if (this.props.editingIngredient !== null) {
      var editing = this.props.editingIngredient;
      amount = editing.amount;
      unit = editing.unit;
      name = editing.name;
    }
    else {
      amount = '';
      unit = null;
      name = '';
    }

    return (
      <div className="add-ingredient-container" style={{ display: this.props.displayForm ? 'block' : 'none' }}>
        <div className="add-ingredient">
          <h2>Add An ingredient:</h2>
          <form className="add-ingredient-form" ref="ingredientForm" onSubmit={this.handleSubmit}>
            <input placeholder="Amount" ref="amount" type="number" step="0.1" defaultValue={amount} ></input>

            {/* TODO: Set selected */}
            {/* <select ref="unit">
              <option>Select Measurement Type</option>
              <option value="teaspoon">Teaspoons(s)</option>
              <option value="tablespoon">Tablespoon(s)</option>
              <option value="cup">Cup(s)</option>
            </select> */}

            <select ref="unit">
              <option>Select Unit</option>
              {this.units.map((option, index) =>
                <option key={index} value={index}>
                  {option.plural}
                </option>
              )}
            </select>

            <input placeholder="Name" ref="name" type="text" defaultValue={name}></input>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddIngredientForm
