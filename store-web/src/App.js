import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Cockpit from './containers/Cockpit/Cockpit';

class App extends Component {
  render() {
    return (
      <Layout>
        <Cockpit />
      </Layout>
    );
  }
}

export default App;
