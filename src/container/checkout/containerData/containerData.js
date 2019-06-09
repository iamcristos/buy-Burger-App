import React, { Component} from 'react';
import {connect} from 'react-redux'
import Button from '../../../UI/button/button';
import classes from './containerData.css';
import axios from '../../../axios';
import Spinner from '../../../UI/loaders/loader'
import Input from '../../../components/form/input/input'

class Container extends Component {

    state = {
            formData: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your Email'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                address: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Address'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }, 
            delivaryMode: {
                elementType: 'select',
                elementConfig: {
                    type: 'select',
                    options: [
                        {value: 'fastest', displayValue:'fastest'},
                        {value: 'slow', displayValue:'slow'}
                    ]
                },
                validation: {},
                value:'',
                valid: true
            },
            },
        formIsValid: false,
        loading: false
    };

submitCheckoutOrder = (event)=> {
    event.preventDefault();
    this.setState({loading:true});
    const formData = {};
    for (let k in this.state.formData ) {
        formData[k] = this.state.formData[k].value
    }
        const order = {
            ingredients: this.props.ingr,
            price: this.props.price,
            oderData : formData
        }
        axios.post('/buy.json', order)
            .then(res=> {
                this.setState({loading:false,})
                this.props.history.push('/')
            })
            .catch(err=> {
                this.setState({loading:false, })
            })
    }

checkValidate = (value, rules)=>{
    let isValid = false;
    if (rules.required) {
        isValid = value.trim() !== ''
    }
    return isValid;
}

onChangeHandler = (event, inputField)=>{
    const formData = {...this.state.formData}
    const onChangeData = {...formData[inputField]}
    onChangeData.value = event.target.value;
    onChangeData.touched = true;
    onChangeData.valid = this.checkValidate(onChangeData.value, onChangeData.validation);
    let formValid = true;
    for(let k in formData) {
        formValid=formData[k].valid && formValid
    }
    formData[inputField] = onChangeData;
    this.setState({formData: formData, formIsValid : formValid})
}


    render () {
        let formDataArray = [];
        for (let k in this.state.formData) {
            formDataArray.push({
                id: k,
                data: this.state.formData[k]
            })
        }
        let form = ( <form onSubmit={this.submitCheckoutOrder}>
            {formDataArray.map(item=>(
                <Input key = {item.id}
                elementType={item.data.elementType}
                elementConfig= {item.data.elementConfig}
                value= {item.data.value}
                invalid = {!item.data.valid}
                validation = {item.data.validation}
                touched = {item.data.touched}
                changed= {(event)=>this.onChangeHandler(event,item.id)}/>
            ))}
            <Button btnType='Success'  disabled = {!this.state.formIsValid}>ORDER</Button>
        </form>);
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4> Input Your details here</h4>
               {form}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        ingr: state.ingredients,
        price: state.price
    }
}

export default connect(mapStateToProps)(Container);