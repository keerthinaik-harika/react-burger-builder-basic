import React from "react";

import Aux from '../../../hoc/Auxilary/Auxilary'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;