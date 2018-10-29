import React, { Component } from 'react'
import AddIngredientForm from './AddIngredientForm'
import IngredientList from './IngredientList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: []
    };

    this.addIngredient = this.addIngredient.bind(this);
  }

  // Allow AddIngredientForm child to update this state
  addIngredient(ingredient) {
    this.state.ingredients.push(ingredient);
    this.setState({ingredients: this.state.ingredients});
  }

  render() {
    return (
      <div className="App">
        <AddIngredientForm
          addIngredient= {this.addIngredient}
        />
        <IngredientList
          ingredients = {this.state.ingredients}
        />
      </div>
    )
  }
}

export default App
