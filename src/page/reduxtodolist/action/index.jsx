import store from "../store";

export default {
  addNewTodo(title) {
    const action = {
      type: "addNewTodo",
      title,
    };
    store.dispatch(action);
  },
};
