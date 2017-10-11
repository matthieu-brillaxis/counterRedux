import React, { Component } from 'react';
import './App.css';
import FaBeer from 'react-icons/lib/fa/beer';
import { Provider } from 'react-redux'
import Store from './store';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Simple redux counter</h1>
          <button >+1 <FaBeer /></button>
          <button >-1 <FaBeer /></button>
        </div>
      </Provider>
    );
  }
}

export default App;
