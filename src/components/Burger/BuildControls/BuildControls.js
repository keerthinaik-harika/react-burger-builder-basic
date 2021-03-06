import React from "react";

import classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                ingredientRemove={() => props.ingredientRemove(ctrl.type)}
                ingredientAdd={() => props.ingredientAdd(ctrl.type)}
                disabledInfo={props.disabledInfo[ctrl.type]}/>
        ))}
        <button
            disabled={!props.purchasable}
            className={classes.OrderButton}
            onClick={props.ordered}>
            {props.isAuthenticated ? 'ORDER NOW' : 'SIGN-UP TO ORDER'}
        </button>
    </div>
);

export default buildControls;