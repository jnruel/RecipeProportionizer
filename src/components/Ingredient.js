import React, { PureComponent } from 'react'
import '../scss/components/_ingredient.scss'

class Ingredient extends PureComponent {


  constructor(props) {
    super(props);
    this.amount = this.props.amount;
    this.measurementType = this.props.measurementType;
    this.name = this.props.name;
    this.adjusted = {
      amount: null,
      measurementType: null,
      name: null
    }
  }

  render() {
    return (
      <li className="ingredient">
        <span className="ingredient-amount">{this.amount}&nbsp;</span>
        <span className="ingredient-measurement-type">{this.measurementType}&nbsp;</span>
        <span className="ingredient-name">of {this.name}</span>
      </li>
    )
  }
}

export default Ingredient
