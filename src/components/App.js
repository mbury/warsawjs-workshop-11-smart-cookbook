import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';
import Content from './Content';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <Provider {...this.props}>
        <Router>
          <Layout sidebar={<Sidebar />} content={<Content />} />
        </Router>
      </Provider>
    );
  }
}

export default App;
