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

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        // console.log(this.props.location.search)
        console.log(query.entries())
        const ingredients = {}
        for (let param of query.entries()) {
            console.log(param)
            ingredients[param[0]] = +param[1]
        }
        console.log(ingredients)
        this.setState({ingredients:ingredients})
    }

    checkoutCancelHandler = ()=> {
        this.props.history.goBack()
    }

    checkoutContinueHandler = ()=> {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <CheckoutSumary ingredients = {this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue= {this.checkoutContinueHandler}/>
            </div>
        )
    }
}

export default Checkout;