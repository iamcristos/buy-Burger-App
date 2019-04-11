import React from 'react'
import Aux from '../../hoc/aux'
import classes from './layout.css'
const layout = (props)=> (
    <Aux>
        <div>Tool bar, Sidebar, Backdrop </div>
        <main className={classes.Container}>
            {props.children}
        </main>
    </Aux>
)

export default layout