import React from 'react'
import logoImg from '../../../assests/images/burger.png'
import classes from './logo.css'

const logo = (props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={logoImg} alt='MyBurger' />
    </div>
)

export default logo