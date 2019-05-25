import React from 'react'
import classes from './button.css'
const button = (props)=>(
    <button onClick={props.clicked} disabled={props.disabled}
        className={[classes.Button , classes[props.btnType]].join(' ')}>
    {props.children}</button>
)

export default button