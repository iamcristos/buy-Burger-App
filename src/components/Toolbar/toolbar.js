import React from 'react'
import classes from './toolbar.css'
import Logo from './Logo/logo'
import Navigation from '.././navigation/navigationItems/navigationItems'

const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <div onClick={props.onShow}>Menu</div>
        <Logo height="80%"/>
        <nav className={classes.Desktop}>
            <Navigation />
        </nav>
    </header>
)

export default toolbar