import React from 'react'
import BurgerIngredient from '../burger/burgerIngredient/burgerIngredient'
import classes from './burger.css'
const burger = (props)=>{
    let transformIngredient = Object.keys(props.ingredients).map((ingredient)=>{
        return [...Array(props.ingredients[ingredient])].map((_, i)=>{
            return <BurgerIngredient key={ingredient + i} type={ingredient} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    console.log(transformIngredient)
if (transformIngredient.length === 0) {
    transformIngredient = <p>Input your preferred ingredients</p>
}
    
    return (
        <div className={classes.burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger