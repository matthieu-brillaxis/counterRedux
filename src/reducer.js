import { combineReducers } from 'redux';
import { moreBeer, lessBeer } from './action';

const counterApp = (state = [], action) => {
    switch(action.type) {
        case 'MORE_BEER':
            return state + 1;
        case 'LESS_BEER':
            return state - 1;
        default:
            return state;
    }
}

export default counterApp;