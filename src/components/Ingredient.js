import React, { PureComponent } from 'react'

class Ingredient extends PureComponent {
  render() {
    return (
      <li className="ingredient">
        <span className="ingredient-amount">{this.props.amount}</span>
        <span className="ingredient-measurement-type">{this.props.measurementType}</span>
        <span className="ingredient-name">{this.props.name}</span>
      </li>
    )
  }
}

export default Ingredient
