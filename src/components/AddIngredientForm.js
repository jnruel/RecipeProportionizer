import React from 'react';
import '../scss/components/_add-ingredient.scss';
import Convert from 'convert-units';

class AddIngredientForm extends React.Component {
  constructor(props) {
    super(props);

    // Get units of volume measurement, filter by imperial system
    let volumeUnits = Convert().list('volume');
    this.units = volumeUnits.filter(measure => measure.system === 'imperial');

    // Bind submit handler
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isNameValid = this.isNameValid.bind(this);
    this.isAmountValid = this.isAmountValid.bind(this);

    this.state =  {
      'valid': false
    }

  }

  isNameValid(ingredient) {
    if(ingredient.hasOwnProperty('name') && ingredient.name.length > 0) {
      return true;
    }

    return false;
  }

  isAmountValid(ingredient) {
    if(ingredient.hasOwnProperty('amount') && ingredient.amount) {
      return true;
    }

    return false;
  }

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
    if (typeof ingredient === 'object') {
      if (this.isNameValid(ingredient) && this.isAmountValid(ingredient)) {
        this.props.submitIngredient(ingredient);
        this.props.closeFormDisplay();
      }
    }
  }

  resetForm() {
    this.refs.ingredientForm.reset();
  }

  render() {
    var amount, unit, name;

    // Set values if currently editing an ingredient
    if (this.props.editingIngredient !== null) {
      var editing = this.props.editingIngredient;
      amount = editing.amount;
      name = editing.name;

      if (typeof editing.unit === 'object') {
        unit = editing.unit;
      }
      else {
        unit = null;
      }
    }
    else {
      amount = '';
      unit = null;
      name = '';
    }

    return (

      <div className="add-ingredient" style={{ display: this.props.displayForm ? 'block' : 'none' }}>
        <div className="add-ingredient-overlay"></div>
        <div className="add-ingredient-modal">
          <h2>Add An ingredient:</h2>
          <form className="add-ingredient-form" ref="ingredientForm" onSubmit={this.handleSubmit}>
            <div className="add-ingredient-form-main">
              <div className="input-wrapper">
                <label>Name</label>
                <input placeholder="Example: Flour" ref="name" type="text" defaultValue={name}></input>
              </div>

              <div className="input-wrapper">
                <label>Amount</label>
                <input placeholder="Example: 2" ref="amount" type="number" step="0.01" defaultValue={amount} ></input>
              </div>

              <div className="input-wrapper">
                <label>Unit (optional)</label>
                <select ref="unit" defaultValue="">
                  <option value="">Select Unit</option>
                  {
                    this.units.map((option, index) => {
                      // If "unit" exists and is the same unit as the editing ingredient,
                      // set selected option
                      if (unit !== null && option.plural === unit.plural) {
                        return (
                          <option selected key={index} value={index}>
                            {option.plural}
                          </option>
                        )
                      }
                      else {
                        return (
                          <option key={index} value={index}>
                            {option.plural}
                          </option>
                        );
                      }
                    })
                  }
                </select>
              </div>
            </div>
            <div className="add-ingredient-form-actions">
              <button onClick={this.props.closeFormDisplay}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddIngredientForm
