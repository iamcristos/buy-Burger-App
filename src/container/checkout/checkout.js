import React, {Component} from 'react';
import CheckoutSumary from '../../components/order/checkoutSumary/checkoutsumary'
class Checkout extends Component{
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            meat : 1,
            cheese : 1
        }
    }
    render() {
        return (
            <div>
                <CheckoutSumary ingredients = {this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout;