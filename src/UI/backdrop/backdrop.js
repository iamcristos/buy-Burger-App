import React from 'react'
import classes from './backdrop.css'
const backdrop = (props)=>(
    props.show ? <div onClick={props.clickedShow} className={classes.Backdrop}></div> : null
)

export default backdrop