import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./redux/reducers/index";

export default createStore(combineReducers(reducers), applyMiddleware(thunk));
