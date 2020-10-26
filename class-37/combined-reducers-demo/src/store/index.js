// store index.js =-> combine reducers
// create and export my store 

import {createStore, combineReducers} from 'redux';

// to enable the chrome extension for redux
import { composeWithDevTools } from 'redux-devtools-extension';
import candidates from './candidates';
import votes from './votes';

// when you have more than one reducer combine here everything
console.log("candidates : ,", candidates);

// my store has these reducers: {candidates: candidates, votes: votes}
let reducers = combineReducers({candidates, votes});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();