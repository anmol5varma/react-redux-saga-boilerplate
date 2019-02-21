import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
