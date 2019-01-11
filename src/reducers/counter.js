const counter = (state = { num: 0 }, action = {}) => {
  switch (action.type) {
    case "INCREMENT":
      return { num: state.num + action.amount };
    case "DECREMENT":
      return { num: state.num - action.amount };
    default:
      return state;
  }
};

export default counter;
