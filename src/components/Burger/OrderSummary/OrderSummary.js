import React, {Component} from "react";

import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{

    // This could be a functional component for perfrmance testing we made it as class component

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[OrderSummary] ComponentDidUpdate");
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
        });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to Checkout?</p>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelHandler}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinueHandler}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;