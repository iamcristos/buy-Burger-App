import React, {Component} from 'react'
import Modal from '../../UI/modal/modal'
import Aux from '../aux'

const customError = (WrappedComponent, axios)=>{
    return class extends Component{
        state = {error: null, clickedShow:true}
        // componentDidMount
        componentWillMount() {
            this.reqInterceptors= axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req
            })
            this.resIntercepto = axios.interceptors.response.use(null,error=>this.setState({error:error}))
        }rs

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }

        confirmedError = ()=> {
            this.setState({error:null})
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} clickedShow={this.confirmedError}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props.children}/>
                </Aux>
            ) 
        }
    }
}

export default customError;