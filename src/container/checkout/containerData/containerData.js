import React, { Component} from 'react';
import Button from '../../../UI/button/button';
import classes from './containerData.css';
import axios from '../../../axios';
import Spinner from '../../../UI/loaders/loader'
import Input from '../../../components/form/input/input'

class Container extends Component {

    state = {
        email : '',
        name : '',
        address : {
            street : "",
            postalCode: ''
        },
        loading: false
    };

submitCheckoutOrder = (event)=> {
    event.preventDefault();
    this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Nmeregini Vincent',
                email: 'nmereginivincent@gmail.com',
                address: 'Lagos Nigeria'
            },
            delivaryMode: 'fastest'
        }
        axios.post('/buy.json', order)
            .then(res=> {
                console.log(res)
                this.setState({loading:false,})
                this.props.history.push('/')
            })
            .catch(err=> {
                this.setState({loading:false, })
            })

}

    render () {
        let form = ( <form>
            <Input inputtype='input' type='text' name='name' placeholder='Input Your Name' />
            <Input inputtype='input' type='email' name='email' placeholder='Input Your Mail' />
            <Input inputtype='input' type='text' name='streel' placeholder='Input Your Street' />
            <Input inputtype='input' type='text' name='postal' placeholder='Input Your Postal Code' />
            <Button btnType='Success' clicked={this.submitCheckoutOrder}>ORDER</Button>
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