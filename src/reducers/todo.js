const todo = (state = { list: [] }, action = {}) => {
  switch (action.type) {
    case "add":
      return { list: [...state.list, action.item] };
    case "remove":
      let list = state.list;
      list.splice(action.index, 1);
      return { list: [...state.list] };
    default:
      return state;
  }
};

export default todo;
