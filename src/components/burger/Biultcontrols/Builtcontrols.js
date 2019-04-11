import React from 'react'
import classes from './builtcontols.css'
import BuildControl from './BuildControl/BuildControl'
const control = [
    {label:'Salad', type: 'salad'},
    {label:'Cheese', type: 'cheese'},
    {label:'Bacon', type: 'bacon'},
    {label:'Meat', type: 'meat'}
]


const builtControls = (props)=>(
    <div className={classes.Builtcontrols}>
    <p><strong>Current Price : {props.price}</strong></p>
        {control.map(ctrl =>{
            return <BuildControl key={ctrl.label} label={ctrl.type} 
            add={()=>props.added(ctrl.type)}
            removed={()=>props.remove(ctrl.type)}
            disable={props.disable[ctrl.type]}/>
        })}
        <button className={classes.ButtonOders}
        disabled={!props.purchased}
        onClick={props.orderSumary}>Checkout</button>
    </div>
)

export default builtControls