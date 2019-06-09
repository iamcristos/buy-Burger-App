import React, {Component} from 'react'
import {connect} from 'react-redux'
import Aux from '../../hoc/aux'
import Burger from '../../components/burger/burger'
import BuildControl from '../../components/burger/Biultcontrols/Builtcontrols'
import Modal from '../../UI/modal/modal'
// import BackDrop from '../../UI/ backdrop/backdrop'
// import axios instance
import axios from '../../axios'
import Loader from '../../UI/loaders/loader';
import OrderSumary from '../../components/burger/oderSumary/oderSumary';
import customError from '../../hoc/customError/customError'
import * as actionTypes from '../../store/action'

/**
 * @returns methods
 * 
 * @class bugerBuilder
 * @extends {Component}
 */
class bugerBuilder extends Component {
    state = {
        purchasable: false,
        purchaseOrder: false,
        loading:false,
        error: false
    }

    componentDidMount() {
        // axios.get('https://buy-burger-app.firebaseio.com/ingredient.json')
        // .then(res=> {
        //     return this.setState({ingredients:res.data})
        // })
        // .catch(err=> this.setState({error:true}))
    }

    /**
     * @returns number of ingredients ordered 
     * 
     * 
     * @memberOf bugerBuilder
     */
    purchaseBurger = ()=> {
        const ingredients = {...this.props.ingr}
        const sum = Object.keys(ingredients)
            .map(item=>ingredients[item])
            .reduce((arr,curr)=> arr+curr)
        if (sum>0) return true
        else return false
    }

    purchaseOrder = ()=>{ 
        this.setState({purchaseOrder:true})
    }

    /**
     * @returns backdrop
     * 
     * 
     * @memberOf bugerBuilder
     */
    backDrop = ()=>{
        this.setState({purchaseOrder:false})
    }

    /**
     * @returns http response to api
     * 
     * 
     * @memberOf bugerBuilder
     */
    confirmCheckout = ()=>{
        // const quaryparams = []
        // for (let i in this.props.ingr) {
        //     quaryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingr[i]))
        // }
        // quaryparams.push('price=' + this.state.price)
        // const quaryString = quaryparams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            // search: "?" + quaryString
        });
    }

    
    render() {
        const disableBtn = {...this.props.ingr}
        // console.log(disableBtn)
        for(let k in disableBtn) {
            disableBtn[k] = disableBtn[k] <= 0
        }
        let burger = this.state.error ? <p>Cannot load ingredient</p> : <Loader/>
        let loading = null
        console.log(this.props.ingr)
        if(this.props.ingr) {
            burger = (<Aux>
                        <Burger ingredients={ this.props.ingr ? this.props.ingr : null}/>
                        <BuildControl 
                        added={this.props.onIngredientAdd}
                        remove={this.props.onIngredientRemove}
                        disable={disableBtn}
                        price={this.props.price}
                        purchased={this.purchaseBurger()}
                        orderSumary={this.purchaseOrder}/>
                    </Aux>);
                    loading = <OrderSumary order={this.props.ingr} 
                    clickedShow={this.backDrop}
                    confirm={this.confirmCheckout} 
                    price={this.props.price}/>
        }
        if (this.state.loading) {
            loading = <Loader/>
        }
        return (
            <Aux>
                <Modal order={this.props.ingr} 
                show={this.state.purchaseOrder} 
                clickedShow={this.backDrop} 
                confirmCheckout ={this.confirmCheckout} 
                price={this.props.price}> 
                    {loading}
                </Modal>
                {burger}
                <div>Ingredients</div>
            </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ingr: state.ingredients,
        price: state.price
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd:(ingredientName)=> dispatch({type: actionTypes.ADDINGREDIENT, ingredientName}),
        onIngredientRemove:(ingredientName)=> dispatch({type: actionTypes.REMOVEINGREDIENT, ingredientName})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(customError(bugerBuilder,axios));