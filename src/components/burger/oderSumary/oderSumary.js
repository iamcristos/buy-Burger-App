import React from 'react'
import Aux from '../../../hoc/aux'
const order = (props)=>{
    const ingredient = {...props.order}
    const ingredientList = Object.keys(ingredient).map(item=> {
        return (
            <li key={item}><strong>You Selected {item}: </strong>{ingredient[item]}</li>
        )
    });

    return (
        <Aux>
            <h1>Heres Your Order summary</h1>
            <ul>
                {ingredientList}
            </ul>
            <p>Would you love to continue?</p>
        </Aux>
    )
}

export default order