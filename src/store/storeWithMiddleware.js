import { createStore, applyMiddleware } from "../redux/redux";
import counter from "../reducers/counter";
import todo from "../reducers/todo";
import combineReducers from "../redux/combineReducers";

// 这种拿不到store，而且只能在各个业务逻辑里面做
const logger = store => next => action => {
  console.log("before", store.getState());
  console.log("action", action);
  next(action);
  console.log("after", store.getState());
};

const reducer = combineReducers({ counter, todo });

const store = applyMiddleware(logger)(createStore)(reducer);

export default store;
