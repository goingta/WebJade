import { createStore } from "../redux/redux";
import counter from "../reducers/counter";
import todo from "../reducers/todo";
import combineReducers from "../redux/combineReducers";

const reducer = combineReducers({ counter, todo });

const store = createStore(reducer);

export default store;
