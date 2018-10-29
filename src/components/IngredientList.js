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
            this.props.ingredients.map((ingredient) => {
              return (
                <Ingredient
                  amount={ingredient.amount}
                  measurementType={ingredient.measurementType}
                  name={ingredient.name}
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
