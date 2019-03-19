import React, { Component } from 'react'
import '../scss/components/_ingredient.scss'

class Ingredient extends Component {

  constructor(props) {
    super(props);
    this.returnId = this.returnId.bind(this);
  }

  returnId() {
    this.props.openFormDisplay(this.props.id);
  }

  render() {

    return (
      <li className="ingredient" data-id={this.props.id}>
        <span className="ingredient-amount">{this.props.amount}&nbsp;</span>
        <span className="ingredient-measurement-type">{this.props.unit ? this.props.unit.abbr : ''}&nbsp;</span>
        <span className="ingredient-name">of {this.props.name}</span>
        <button className="ingredient-edit" onClick={this.returnId}>Edit</button>
      </li>
    )
  }
}

export default Ingredient
