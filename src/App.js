import React, { Component } from 'react';
import Layout from './components/layout/layout'
import BurgerBuilder from './container/BugerBuilder/bugerBuilder'
import Checkout from './container/checkout/checkout';
class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <BurgerBuilder />
              <Checkout />
          </Layout>
      </div>
    );
  }
}

export default App;
