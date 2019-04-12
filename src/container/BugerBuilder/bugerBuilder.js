import React, {Component} from 'react'
import Aux from '../../hoc/aux'
import Burger from '../../components/burger/burger'
import BuildControl from '../../components/burger/Biultcontrols/Builtcontrols'
import Modal from '../../UI/modal/modal'
// import BackDrop from '../../UI/ backdrop/backdrop'

const INGREDIENT_PRICE = {
    meat : 2.00,
    cheese: 1.50,
    salad: 0.5,
    bacon: 1.00
}

/**
 * @returns methods
 * 
 * @class bugerBuilder
 * @extends {Component}
 */
class bugerBuilder extends Component {
    state = {
        ingredients : {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon:0
        },
        price: 4.00,
        purchasable: false,
        purchaseOrder: false,
    }

    purchaseBurger = ()=> {
        const ingredients = {...this.state.ingredients}
        const sum = Object.keys(ingredients)
            .map(item=>ingredients[item])
            .reduce((arr,curr)=> arr+curr)
            console.log(sum)
        if (sum>0) return true
        else return false
    }

    purchaseOrder = ()=>{ 
        this.setState({purchaseOrder:true})
    }

    backDrop = ()=>{
        this.setState({purchaseOrder:false})
    }

    confirmCheckout = ()=>{
        alert('You confirmed your Order')
    }

    addIngredient = (type)=>{
        const selectedIngredient = this.state.ingredients[type]
        const update = selectedIngredient + 1 
        const newIngredient = {...this.state.ingredients}
        newIngredient[type] = update;
        const price = {...INGREDIENT_PRICE}
        const newPrice = price[type] + this.state.price
        // console.log(this.purchaseBurger())
        this.setState({ingredients:newIngredient, price:newPrice})
        this.purchaseBurger()
    }

    
    removeIngredient = (type)=>{
        const selectedIngredient = this.state.ingredients[type]
        const update = selectedIngredient - 1
        if( update < 0) {
            return
        }
        const updateIngredient = {...this.state.ingredients}
        updateIngredient[type] = update;
        const price = {...INGREDIENT_PRICE}
        const newPrice = this.state.price-price[type];

        this.setState({ingredients:updateIngredient, price:newPrice})
        this.purchaseBurger()
    }
    render() {
        const disableBtn = {...this.state.ingredients}
        for(let k in disableBtn) {
            disableBtn[k] = disableBtn[k] <= 0
        }
        // console.log(disableBtn)
        return (
            <Aux>
                <Burger ingredients={ this.state.ingredients}
                />
                <Modal order={this.state.ingredients} show={this.state.purchaseOrder} 
                clickedShow={this.backDrop} confirmCheckout ={this.confirmCheckout} price={this.state.price}/>
                <BuildControl 
                added={this.addIngredient}
                remove={this.removeIngredient}
                disable={disableBtn}
                price={this.state.price}
                purchased={this.purchaseBurger()}
                orderSumary={this.purchaseOrder}/>
                <div>Ingredients</div>
            </Aux>
        )
    }
}


export default bugerBuilder