import * as actionTypes from './action'

const initialState = {
    ingredients : {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0
    },
    price: 4.00,
}

const INGREDIENT_PRICE = {
    meat : 2.00,
    cheese: 1.50,
    salad: 0.5,
    bacon: 1.00
}

const reducer = (state= initialState, action)=>{
    switch(action.type) {
        case(actionTypes.ADDINGREDIENT) :
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                price: state.price + INGREDIENT_PRICE[action.ingredientName]
            }
        case(actionTypes.REMOVEINGREDIENT) :
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                price: state.price - INGREDIENT_PRICE[action.ingredientName]
            }
        default :
            return state
    }
}

export default reducer;