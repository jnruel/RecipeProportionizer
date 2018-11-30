import React, { Component } from 'react'

class AdjustProportionBtn extends Component {
  constructor(props) {
    super(props);
    this.adjustProportion = this.adjustProportion.bind(this);
  }

  adjustProportion(event) {

    const updatedIngredients = [];//this.props.ingredients;


    this.props.ingredients.map(ingredient => {
      let updatedIngredient = Object.assign({}, ingredient);
      updatedIngredient.amount = updatedIngredient.amount * this.props.amount;
      updatedIngredients.push(updatedIngredient);
    });

    this.props.updateIngredients(updatedIngredients);
  }

  render() {
    return (
      <button onClick={this.adjustProportion}>
        Double it
      </button>
    )
  }
}

export default AdjustProportionBtn
