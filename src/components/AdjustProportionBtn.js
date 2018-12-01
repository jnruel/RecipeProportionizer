import React, { Component } from 'react'

class AdjustProportionBtn extends Component {
  constructor(props) {
    super(props);
    this.adjustProportion = this.adjustProportion.bind(this);
  }

  adjustProportion(event) {
    const updatedIngredients = [];

    this.props.ingredients.map(ingredient => {
      let updatedIngredient = Object.assign({}, ingredient);
      updatedIngredient.amount = updatedIngredient.baseAmount * this.props.multiplier;
      updatedIngredients.push(updatedIngredient);
    });

    this.props.updateIngredients(updatedIngredients);
  }

  render() {
    return (
      <button onClick={this.adjustProportion}>
        {this.props.text}
      </button>
    )
  }
}

export default AdjustProportionBtn
