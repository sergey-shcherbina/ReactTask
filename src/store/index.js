import { createStore, combineReducers, applyMiddleware } from 'redux';
import { listReducer } from './listReducer';
//import { activeListReducer } from './activeListReducer';
//import { radioReducer } from './radioReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    list: listReducer,
    //actives: activeListReducer ,
    //radio: radioReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))