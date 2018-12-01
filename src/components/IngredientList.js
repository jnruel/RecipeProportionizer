import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
  render() {
    return (
      <div className="ingredient-list-container">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {
            // Loop ingredients sent from parent state, render list items
            this.props.ingredients.map((thisIngredient, key) => {
              return (
                <Ingredient
                  key={thisIngredient.id}
                  id={thisIngredient.id}
                  amount={thisIngredient.amount}
                  measurementType={thisIngredient.measurementType}
                  name={thisIngredient.name}
                />
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default IngredientList
