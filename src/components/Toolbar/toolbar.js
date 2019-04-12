import React from 'react'
import classes from './toolbar.css'
import Logo from './Logo/logo'
import Navigation from '.././navigation/navigationItems/navigationItems'
const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo/>
        <nav>
            <Navigation />
        </nav>
    </header>
)

export default toolbar