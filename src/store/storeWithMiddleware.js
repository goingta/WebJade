import { createStore, applyMiddleware } from "../redux/redux";
import counter from "../reducers/counter";
import todo from "../reducers/todo";
import combineReducers from "../redux/combineReducers";
const INCREMENT = "INCREMENT";
/**
 *
 * 最外层的是一个新的dispatch，所以action是外面传过来的
 */
const logger = store => next => action => {
  console.log("logger before", store.getState());
  console.log("logger action", action);
  next(action);
  console.log("logger after", store.getState());
};

const thunk = store => next => action => {
  if (typeof action === "function") {
    action(next);
  } else {
    next(action);
  }
};

const promise = store => next => action => {
  if (action.then) {
    action.then(promiseAction => {
      next(promiseAction);
    });
  } else {
    next(action);
  }
};

const reducer = combineReducers({ counter, todo });

// const store = applyMiddleware(logger)(createStore)(reducer);
// const store = applyMiddleware(thunk)(createStore)(reducer);
const store = applyMiddleware(thunk, promise, logger)(createStore)(reducer);

store.dispatch(dispatch => {
  setTimeout(() => {
    dispatch({ type: INCREMENT, amount: 3 });
  }, 3000);
});

store.dispatch(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ type: INCREMENT, amount: 3 });
    }, 3000);
  })
);

export default store;
