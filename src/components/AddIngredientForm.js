import React from 'react';
import '../scss/components/_add-ingredient.scss'

class AddIngredientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      value: 'Add an ingredient'
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleForm() {
    this.setState({active: !this.state.active});
  }

  handleSubmit(event) {
    event.preventDefault();

    var ingredient = {
      amount: parseFloat(this.refs.amount.value),
      baseAmount: parseFloat(this.refs.amount.value),
      measurementType: this.refs.measurementType.value,
      name: this.refs.name.value,
    };

    // Only add ingredient if correct
    // TODO: add actually good checking/validation
    if(typeof ingredient === 'object' && ingredient.hasOwnProperty('name') && ingredient.name.length > 0) {
      this.props.submitIngredient(ingredient);
      this.refs.ingredientForm.reset();
      this.setState({active: false});
    }
  }

  render() {
    return (
      <div className="add-ingredient-container">
        <button onClick={this.toggleForm} style={{ display: this.state.active ? 'none' : 'block' }}>Add an ingredient</button>

        <div className="add-ingredient" style={{ display: this.state.active ? 'block' : 'none' }}>
          <h2>Add An ingredient:</h2>
          <form className="add-ingredient-form" ref="ingredientForm" onSubmit={this.handleSubmit}>
            <input placeholder="Amount" ref="amount" type="number" step="0.1"></input>

            <select ref="measurementType">
              <option>Select Measurement Type</option>
              <option value="teaspoon">Teaspoons(s)</option>
              <option value="tablespoon">Tablespoon(s)</option>
              <option value="cup">Cup(s)</option>
            </select>

            <input placeholder="Name" ref="name" type="text"></input>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

    );
  }
}

export default AddIngredientForm
