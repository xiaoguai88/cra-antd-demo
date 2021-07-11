import store from "../store";

export default {
  addNewTodo(title) {
    const action = {
      type: "addNewTodo",
      title,
    };
    store.dispatch(action);
  },
  // 删除
  removeTodoById(id) {
    const action = {
      type: "removeTodoById",
      id,
    };
    store.dispatch(action);
  },
  // 修改状态
  changeStateByIsFinished(id) {
    const action = {
      type: "changeStateByIsFinished",
      id,
    };
    store.dispatch(action);
  },
};
