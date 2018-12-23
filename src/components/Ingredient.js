import React, { PureComponent } from 'react'
import '../scss/components/_ingredient.scss'

class Ingredient extends PureComponent {
  render() {

    let measurementType = this.props.measurementType;

    // Pluralize measurement type if not 1
    if (this.props.amount !== 1) {
      measurementType += 's';
    }

    return (
      <li className="ingredient" data-id={this.props.id}>
        <span className="ingredient-amount">{this.props.amount}&nbsp;</span>
        <span className="ingredient-measurement-type">{measurementType}&nbsp;</span>
        <span className="ingredient-name">of {this.props.name}</span>
        {/* <button>Edit</button> */}
      </li>
    )
  }
}

export default Ingredient
