import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import CheckoutSumary from '../../components/order/checkoutSumary/checkoutsumary';
import ContainerData from './containerData/containerData'
class Checkout extends Component{
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        // console.log(this.props.location.search)
        console.log(query.entries())
        const ingredients = {}
        for (let param of query.entries()) {
            console.log(param)
            if (param[0] === 'price') {
                this.setState({price: param[1]})
            } else {
             ingredients[param[0]] = +param[1]
            }
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
                <Route path={this.props.match.url + '/contact-data'} render = {(props)=> <ContainerData ingredients={this.state.ingredients} {...props}
                 price={this.state.price}/>} />
                {/* // component={ContainerData} /> */}
            </div>
        )
    }
}

export default Checkout;