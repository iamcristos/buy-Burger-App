import React from 'react'
import NavigationItems from '../navigation/navigationItems/navigationItems'
import Logo from '../Toolbar/Logo/logo'
import classes from './sideDrawer.css'
import Backdrop from '../../UI/backdrop/backdrop'
import Aux from '../../hoc/aux'
const sideDrawer = (props)=>{
    let ToggleSideDrawer = [classes.sideDrawer, classes.close].join(' ')
    if (props.open) {
        ToggleSideDrawer = [classes.sideDrawer, classes.open].join(' ')
    }
    return (
        <Aux>
            <Backdrop show={props.open} clickedShow={props.clicked}/>
            <div className={ToggleSideDrawer} >
                < Logo height="11%"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer