import React from 'react'
import NavigationItems from '../navigation/navigationItems/navigationItems'
import Logo from '../Toolbar/Logo/logo'
import classes from './sideDrawer.css'
const sideDrawer = (props)=>{
    return (
        <div className={classes.sideDrawer}>
            < Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        
    )
}

export default sideDrawer