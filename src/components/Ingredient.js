import React, { PureComponent } from 'react'
import '../scss/components/_ingredient.scss'

class Ingredient extends PureComponent {

  render() {
    return (
      <li className="ingredient">
        <span className="ingredient-amount">{this.props.amount}&nbsp;</span>
        <span className="ingredient-measurement-type">{this.props.measurementType}&nbsp;</span>
        <span className="ingredient-name">of {this.props.name}</span>
      </li>
    )
  }
}

export default Ingredient
