import React from 'react'
import Aux from '../../hoc/aux'
import clssses from './modal.css'
import OrderSumary from '../../components/burger/oderSumary/oderSumary'
import Backdrop from '../backdrop/backdrop'
const modal = (props)=>(
    <Aux>
        <Backdrop show={props.show} clickedShow={props.clickedShow}/>
        <div className={clssses.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
                }}>
                <OrderSumary order={props.order} clickedShow={props.clickedShow}
                confirm={props.confirmCheckout} price={props.price}/>
        </div>
    </Aux>
)

export default modal