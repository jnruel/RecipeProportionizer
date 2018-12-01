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
          amount: 2,
          baseAmount: 2,
          name: 'butter',
          measurementType: 'cup'
        },
        {
          id: 2,
          amount: 1,
          baseAmount: 1,
          name: 'vanilla',
          measurementType: 'tablespoon'
        }
      ]
    };

    var lastId = 0;

    if (this.state.ingredients.length > 0 ) {
      lastId = this.state.ingredients[this.state.ingredients.length - 1].id;
    }

    this.state.lastId = lastId
    this.addIngredient = this.addIngredient.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  // Allow AddIngredientForm child to update this state
  addIngredient(newIngredient) {
    newIngredient.id = this.state.lastId + 1;
    this.state.ingredients.push(newIngredient);
    this.setState({ingredients: this.state.ingredients, lastId: newIngredient.id}, function() {
      console.log(this.state);
    });
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

        <h3>Convert proportions by:</h3>

        <AdjustProportionBtn
          updateIngredients={this.updateIngredients}
          ingredients={this.state.ingredients}
          multiplier={0.5}
          text="Half"
        />

        <AdjustProportionBtn
          updateIngredients={this.updateIngredients}
          ingredients={this.state.ingredients}
          multiplier={1}
          text="Original"
        />

        <AdjustProportionBtn
          updateIngredients={this.updateIngredients}
          ingredients={this.state.ingredients}
          multiplier={2}
          text="Double"
        />

      </div>
    )
  }
}

export default App
