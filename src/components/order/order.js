import React from 'react';
import classes from './order.css';
const order = (props)=> {
    let ingredientName = [];
    for (let i in props.ingredient) {
        ingredientName.push({
            name: i,
            amount: props.ingredient[i]
        })
    }
    const ingredientOutput = ingredientName.map(item => {
        return  <span key={item.name} > {item.name} ({item.amount})</span>
    })
   return (
       <div className={classes.Order}>
           <p>Ingredients:{ingredientOutput }</p>
           <p>Price: USD {props.price}</p>
       </div>
   )
}

export default order