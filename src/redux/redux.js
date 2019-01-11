//创建仓库
const createStore = reducer => {
  let state;

  function getState() {
    return state;
  }

  function dispatch(obj) {
    state = reducer(state, obj);
    for (let fn of listeners) {
      fn();
    }
  }

  let listeners = [];
  function subscribe(fn) {
    listeners.push(fn);
  }

  function unsubscribe() {
    listeners = [];
  }

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };
};

export { createStore };
