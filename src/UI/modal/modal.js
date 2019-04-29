import React, {Component} from 'react'
import Aux from '../../hoc/aux'
import clssses from './modal.css'
// import OrderSumary from '../../components/burger/oderSumary/oderSumary'
import Backdrop from '../backdrop/backdrop'
class Modal extends Component {
shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
}
    render () {
        return (
                <Aux>
                        <Backdrop show={this.props.show} clickedShow={this.props.clickedShow}/>
                        <div className={clssses.Modal} style={{
                                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                opacity: this.props.show ? '1' : '0'
                                }}>
                                {/* <OrderSumary order={this.props.order} 
                                clickedShow={this.props.clickedShow}
                                confirm={this.props.confirmCheckout} 
                                price={this.props.price}/> */}
                                {this.props.children}
                        </div>
                    </Aux>
        )
    }
}
export default Modal