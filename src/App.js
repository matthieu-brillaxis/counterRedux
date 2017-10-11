import React, { Component } from 'react';
import './App.css';
import FaBeer from 'react-icons/lib/fa/beer';
import { Provider } from 'react-redux'
import store from './store';
import PropTypes from 'prop-types';

class App extends Component {

  constructor() {
    super();
    this.state = {
      score:0
    };
  }

  onIncrement = () => {
    store.dispatch({ type: 'MORE_BEER'});
    this.setState({ score : store.getState()})
  }

  onDecrement = () => {
    store.dispatch({ type: 'LESS_BEER'});
    this.setState({ score : store.getState()})
  }

  render() {
    const {score} = store.getState();
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Simple redux counter</h1>
          <button onClick={this.onIncrement}>+1 <FaBeer /></button>
          <button onClick={this.onDecrement}>-1 <FaBeer /></button>
          <p>{this.state.score}</p>
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  score: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default App;
