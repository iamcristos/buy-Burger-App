import React, {Component} from 'react'
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
        ingredients : null,
        price: 4.00,
        purchasable: false,
        purchaseOrder: false,
        loading:false,
        error: false
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('https://buy-burger-app.firebaseio.com/ingredient.json')
        .then(res=> {
            return this.setState({ingredients:res.data})
        })
        .catch(err=> this.setState({error:true}))
    }

    /**
     * @returns number of ingredients ordered 
     * 
     * 
     * @memberOf bugerBuilder
     */
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
        // this.setState({loading:true})
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Nmeregini Vincent',
        //         email: 'nmereginivincent@gmail.com',
        //         address: 'Lagos Nigeria'
        //     },
        //     delivaryMode: 'fastest'
        // }
        // axios('/buy.json', order)
        //     .then(res=> {
        //         console.log(this.props.history)
        //         this.setState({loading:false,purchaseOrder:false})
        //     })
        //     .catch(err=> {
        //         this.setState({loading:false, purchaseOrder:false})
        //     })
            // console.log(this.props.history)
        // alert('You confirmed your Order')
        const quaryparams = []
        for (let i in this.state.ingredients) {
            quaryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const quaryString = quaryparams.join('&');
        console.log(quaryString)
        this.props.history.push({
            pathname: '/checkout',
            search: "?" + quaryString
        });
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
        // set loading
        let burger = this.state.error ? <p>Cannot load ingredient</p> : <Loader/>
        let loading = null
        if(this.state.ingredients) {
            burger = (<Aux>
                        <Burger ingredients={ this.state.ingredients ? this.state.ingredients : null}/>
                        <BuildControl 
                        added={this.addIngredient}
                        remove={this.removeIngredient}
                        disable={disableBtn}
                        price={this.state.price}
                        purchased={this.purchaseBurger()}
                        orderSumary={this.purchaseOrder}/>
                    </Aux>);
                    loading = <OrderSumary order={this.state.ingredients} 
                    clickedShow={this.backDrop}
                    confirm={this.confirmCheckout} 
                    price={this.state.price}/>
        }
        if (this.state.loading) {
            loading = <Loader/>
        }
        return (
            <Aux>
                <Modal order={this.state.ingredients} 
                show={this.state.purchaseOrder} 
                clickedShow={this.backDrop} 
                confirmCheckout ={this.confirmCheckout} 
                price={this.state.price}> 
                    {loading}
                </Modal>
                {burger}
                <div>Ingredients</div>
            </Aux>
        )
    }
}

// export default bugerBuilder;

export default customError(bugerBuilder,axios);