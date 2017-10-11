import { createStore } from 'redux';
import counterApp from './reducer';

let store = createStore(counterApp)

export default Store;