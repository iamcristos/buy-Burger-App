import React from 'react'
import classes from './navigationItem.css'


const navigationItem = (props)=>(
    <li className={classes.Navigation}>
        <a className={props.active ? classes.active : null}
        href={props.link}>{props.children}</a>
    </li>
)

export default navigationItem