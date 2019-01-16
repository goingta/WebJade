//创建仓库
const createStore = reducer => {
  let state;
  let listeners = [];

  //获取最新状态
  function getState() {
    return state;
  }

  //向reducer发送action
  function dispatch(action) {
    state = reducer(state, action);
    // for (let fn of listeners) {
    //   fn();
    // }
    listeners.forEach(listener => listener());
  }

  //监听状态变化，当状态变化调用对应的监听函数
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(item => item !== listener);
    };
  }

  function unsubscribe() {
    listeners = [];
  }

  return {
    getState,
    dispatch,
    subscribe,
    unsubscribe
  };
};

//中间件
const applyMiddleware = (...middlewares) => createStore => reducer => {
  let store = createStore(reducer);
  let dispatchHandles = middlewares.map(middleware => middleware(store)); //拿到dispatch句柄
  let dispatch = compose(...dispatchHandles)(store.dispatch); //新的dispatch
  //返回用新的dispatch覆盖原来的store里面的dispatch
  return {
    ...store,
    dispatch
  };
};

const compose = (...fns) => (...args) => {
  let last = fns.pop();
  return fns.reduceRight((composed, fn) => {
    return fn(composed);
  }, last(...args));
};

export { createStore, applyMiddleware };
