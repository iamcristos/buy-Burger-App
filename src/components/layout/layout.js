import React from 'react'
import Aux from '../../hoc/aux'
import classes from './layout.css'
import Toolbar from '../Toolbar/toolbar'
import SideDrawer from '../sideDrawer/sideDrawer'
const layout = (props)=> (
    <Aux>
        <Toolbar/>
        <SideDrawer />
        <div>Tool bar, Sidebar, Backdrop </div>
        <main className={classes.Container}>
            {props.children}
        </main>
    </Aux>
)

export default layout