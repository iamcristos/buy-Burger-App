import React, { Component} from 'react';
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
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your Email'
                    },
                    value: ''
                },
                address: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Address'
                    },
                    value: ''
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
                value:''
            },
            },
        loading: false
    };

submitCheckoutOrder = (event)=> {
    event.preventDefault();
    this.setState({loading:true});
    const formData = {};
    for (let k in this.state.formData ) {
        formData[k] = this.state.formData[k].value
    }
    // console.log(formData)
        const order = {
            ingredients: this.props.ingredients,
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

onChangeHandler = (event, inputField)=>{
    const formData = {...this.state.formData}
    const onChangeData = {...formData[inputField]}
    onChangeData.value = event.target.value;
    formData[inputField] = onChangeData;
    this.setState({formData: formData})
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
                changed= {(event)=>this.onChangeHandler(event,item.id)}/>
            ))}
            <Button btnType='Success' >ORDER</Button>
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

export default Container;