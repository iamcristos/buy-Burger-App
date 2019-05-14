import React from 'react'
import NavigationItem from './navigationItem/navigationItem'
import classes from './navigationItems.css'

const navigationItems = (props)=>(
    <ul className={classes.Navigation}>
        <NavigationItem link='/'  exact>
            Burgeer Builder
        </NavigationItem>
        <NavigationItem link='/orders' > Orders</NavigationItem>
    </ul>
)

export default navigationItems