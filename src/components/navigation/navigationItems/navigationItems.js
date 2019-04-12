import React from 'react'
import NavigationItem from './navigationItem/navigationItem'
import classes from './navigationItems.css'
const navigationItems = (props)=>(
    <ul className={classes.Navigation}>
        <NavigationItem link='/' active>
            Burgeer Builder
        </NavigationItem>
        <NavigationItem link='/' active> Checkout</NavigationItem>
    </ul>
)

export default navigationItems