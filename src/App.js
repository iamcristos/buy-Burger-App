import React, { Component } from 'react';
import Layout from './components/layout/layout'
import BurgerBuilder from './container/BugerBuilder/bugerBuilder'
import Checkout from './container/checkout/checkout';
import { Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Switch>
              <Route path = "/checkout" component ={Checkout} />
              <Route path = "/" exact component ={BurgerBuilder} />
            </Switch>
          </Layout>
      </div>
    );
  }
}

export default App;
