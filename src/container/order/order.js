import React, {Component} from 'react';
import Order from '../../components/order/order';
import axios from '../../axios';
import CustomError from '../../hoc/customError/customError';
import Spinner from '../../UI/loaders/loader'
class Orders extends Component {

    state = {
        ingredient : [],
        loading: true
    }
    componentDidMount() {
        axios.get('/buy.json')
            .then(res => {
                // console.log(res.data)
               const fetchedData = []
                for (let k in res.data) {
                    // console.log(k)
                    fetchedData.push({
                        ...res.data[k],
                        id: k
                    })
                }
                console.log(fetchedData)
                this.setState({loading:false, ingredient:fetchedData})
            })
            .catch(err => {
                this.setState({loading:false})
            })
    }

    render () {
        return (
            <div>
                 {this.state.ingredient.map(item=>
                     <Order key = {item.id} ingredient = {item.ingredients}
                     price={item.price}/>
                 )}
            </div>
        )
    }
};

export default CustomError(Orders,axios);