import React, { Component } from 'react'
import AddIngredientForm from './AddIngredientForm'
import IngredientList from './IngredientList'
import AdjustProportionBtn from './AdjustProportionBtn';


class App extends Component {
  constructor(props) {
    super(props);

    this.ingredientForm = React.createRef();

    this.state = {
      ingredients: [
        // {
        //   id: 1,
        //   amount: 2,
        //   baseAmount: 2,
        //   name: 'butter',
        //   unit: 'cup'
        // },
        // {
        //   id: 2,
        //   amount: 1,
        //   baseAmount: 1,
        //   name: 'vanilla',
        //   unit: 'tablespoon'
        // }
      ],
      displayForm: false,
      editingIngredient: null
    };

    var lastId = 0;

    if (this.state.ingredients.length > 0 ) {
      lastId = this.state.ingredients[this.state.ingredients.length - 1].id;
    }

    this.state.lastId = lastId

    // Bind functions
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
    this.openFormDisplay = this.openFormDisplay.bind(this);
    this.closeFormDisplay = this.closeFormDisplay.bind(this);
    this.submitIngredient = this.submitIngredient.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  openFormDisplay(ingredient_id = null) {
    if (ingredient_id !== null) {
      var editing_ingredient = this.state.ingredients.find(ingredient => ingredient.id === ingredient_id);

      if (typeof editing_ingredient !== 'undefined') {
        this.setState({editingIngredient: editing_ingredient});
      }
    }
    else {
      this.setState({editingIngredientId: null});
    }

    this.setState({displayForm: true});
  }

  closeFormDisplay() {
    this.setState({editingIngredient: null});
    this.setState({displayForm: false});
    this.ingredientForm.current.resetForm();
  }

  toggleFormDisplay(ingredient_id = null) {
    if (ingredient_id !== null) {

      var editing_ingredient = this.state.ingredients.find(ingredient => ingredient.id === ingredient_id);

      if (typeof editing_ingredient !== 'undefined') {
        this.setState({editingIngredient: editing_ingredient});
      }
    }
    else {
      this.setState({editingIngredientId: null});
    }

    this.setState({displayForm: !this.state.displayForm});
  }

  // Allow AddIngredientForm child to update this state
  submitIngredient(newIngredient) {
    if (typeof newIngredient.id === 'undefined') {
      newIngredient.id = this.state.lastId + 1;
      this.state.ingredients.push(newIngredient);
      this.setState({ ingredients: this.state.ingredients, lastId: newIngredient.id });
    }
    else {
      var thisIngredients = this.state.ingredients;
      var index = thisIngredients.findIndex(ingredient => ingredient.id === newIngredient.id);
      thisIngredients[index] = newIngredient;
      this.setState({ ingredients: this.state.ingredients });
    }
  }

  updateIngredients(updatedIngredients) {
    this.setState({ingredients: updatedIngredients});
  }

  render() {
    return (
      <div className="app">
        <h1>Recipe Proportionizer</h1>
        <button onClick={this.openFormDisplay} disabled={this.state.displayForm}>Add an ingredient</button>

        <AddIngredientForm
          ref={this.ingredientForm}
          submitIngredient={this.submitIngredient}
          closeFormDisplay={this.closeFormDisplay}
          displayForm={this.state.displayForm}
          editingIngredient={this.state.editingIngredient}
        />

        <main>
          <IngredientList
            ingredients={this.state.ingredients}
            openFormDisplay={this.openFormDisplay}
          />
        </main>

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
