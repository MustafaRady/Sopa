import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import RootReducer from "./RootReducer";
import authMiddleware from './authentication';

const reducer = RootReducer;

const middleware = [thunk];

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware,authMiddleware)));

export default store;
