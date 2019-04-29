import React, {Component} from 'react'
import Aux from '../../hoc/aux'
import classes from './layout.css'
import Toolbar from '../Toolbar/toolbar'
import SideDrawer from '../sideDrawer/sideDrawer'
class Layout extends Component {

    state = {
        show: true
    }
    showSideDrawerHandler = ()=>{
        this.setState({show:false})
    }
    openShowHandler = ()=>{
        this.setState({show:true})
    }
    render () {
        return (
            <Aux>
                <Toolbar onShow={this.openShowHandler}/>
                <SideDrawer open={this.state.show} clicked={this.showSideDrawerHandler}/>
                <div>Tool bar, Sidebar, Backdrop </div>
                <main className={classes.Container}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout