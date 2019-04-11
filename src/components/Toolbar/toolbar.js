import React from 'react'
import classes from './toolbar.css'
import Logo from './Logo/logo'
const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo/>
        <nav>...</nav>
    </header>
)

export default toolbar