import React from 'react'
import classes from './button.css'
const button = (props)=>(
    <button onClick={props.clicked}
    className={[classes.Button, classes[props.typeOf].join(' ')]}
    >{props.children}</button>
)

export default button