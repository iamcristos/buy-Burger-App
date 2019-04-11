import React from 'react'
import Aux from '../../../hoc/aux'
import Button from '../../../UI/button/button'
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
            <p><strong>Price Is: ${props.price.toFixed(2)}</strong></p>
            <p>Would you love to continue?</p>
            <Button btnType='Danger' clicked={props.clickedShow}>CANCEL</Button>
            <Button btnType='Success' clicked={props.confirm}>CONTINUE</Button>
        </Aux>
    )
}

export default order