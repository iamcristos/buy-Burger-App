import React, { Component } from 'react';
import Layout from './components/layout/layout'
import BurgerBuilder from './container/BugerBuilder/bugerBuilder'
class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <BurgerBuilder />
          </Layout>
      </div>
    );
  }
}

export default App;
