import React from 'react';
import Burger from '../../burger/burger';
import Button from '../../../UI/button/button';
import classes from './checkoutsummary.css'
const checkoutSumary = (props) => {

    return (
        <div className={classes.checkoutSumary}>
            <h1> Hello hope you have an awesome time</h1>
            <div style={{'width': '100%', 'margin': 'auto'}}>
                <Burger ingredients = {props.ingredients}/>
            </div>
            <Button clicked={props.checkoutContinue}
            btnType= 'Success'>CONTINUE</Button>
            <Button clicked={props.checkoutCancel}
            btnType= 'Danger'>CANCEL</Button>
        </div>
    )
}

export default checkoutSumary;