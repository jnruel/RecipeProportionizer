import React, { Component } from 'react'
import AddIngredientForm from './AddIngredientForm'
import IngredientList from './IngredientList'
import AdjustProportionBtn from './AdjustProportionBtn';
// import update from 'immutability-helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [
        {
          id: 1,
          name: 'butter',
          amount: 2,
          measurementType: 'cup'
        },
        {
          id: 2,
          name: 'vanilla',
          amount: 1,
          measurementType: 'tablespoon'
        }
      ]
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  // Allow AddIngredientForm child to update this state
  addIngredient(ingredient) {

    ingredient.id = Math.floor(Math.random() * 20);
    console.log(ingredient);
    this.state.ingredients.push(ingredient);
    this.setState({ingredients: this.state.ingredients});
  }

  updateIngredients(updatedIngredients) {
    this.setState({ingredients: updatedIngredients});
  }

  render() {
    return (
      <div className="App">
        <AddIngredientForm
          addIngredient={this.addIngredient}
        />

        <IngredientList
          ingredients={this.state.ingredients}
        />

        <AdjustProportionBtn
          updateIngredients={this.updateIngredients}
          ingredients={this.state.ingredients}
          amount={2}
        />
      </div>
    )
  }
}

export default App
