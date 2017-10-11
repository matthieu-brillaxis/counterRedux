import { combineReducers } from 'redux';
import { moreBeer, lessBeer } from './action';

const counterApp = (state = [], action) => {
    switch(action.type) {
        case 'MORE_BEER':
            return [
                ...state, 
                {
                    score: action.score,
                    increment: action.increment
                }
            ]
        case 'LESS_BEER':
        return [
            ...state, 
            {
                score: action.score,
                increment: action.decrement
            }
        ]
        default:
            return state
    }
}

export default counterApp;