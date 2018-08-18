import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SubMaker from './containers/SubMaker/SubMaker';
import Checkout from './containers/Checkout/Checkout';  
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={SubMaker}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component ={Orders} />
        </Layout>
      </div>
    );
  }
}

export default App;
