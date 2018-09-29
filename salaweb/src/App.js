import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav/index.js';
import PageContainer from './Containers/PageContainer/index.js';
import './resources/scss/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Nav />
          <PageContainer />
        </div>
      </Router>
    );
  }
}

export default App;
