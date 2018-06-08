import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import SubMaker from './containers/SubMaker/SubMaker';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SubMaker/>
        </Layout>
      </div>
    );
  }
}

export default App;
