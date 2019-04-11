import React from 'react'
import Aux from '../../hoc/aux'
import classes from './layout.css'
import Toolbar from '../Toolbar/toolbar'
const layout = (props)=> (
    <Aux>
        <Toolbar/>
        <div>Tool bar, Sidebar, Backdrop </div>
        <main className={classes.Container}>
            {props.children}
        </main>
    </Aux>
)

export default layout