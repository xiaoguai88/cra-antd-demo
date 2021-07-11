import state from "../state";

const reducer = (prevState = state, action) => {
  const new_state = { ...prevState };
  switch (action.type) {
    case "addNewTodo":
      new_state.todos.push({
        id: handleActions.getId(new_state.todos),
        title: action.title,
        isFinished: false,
      });
      break;
    case "removeTodoById":
      new_state.todos = handleActions.removeTodoById(
        new_state.todos,
        action.id
      );
      break;
    case "changeStateByIsFinished":
      new_state.todos = handleActions.changeStateByIsFinished(
        new_state.todos,
        action.id
      );
      break;
    default:
      break;
  }
  return new_state;
};

export default reducer;

const handleActions = {
  // 新增todo
  getId(todos) {
    todos = todos.slice();
    if (todos.length === 0) return 1;
    return (
      todos.sort((a, b) => {
        return b.id - a.id;
      })[0].id + 1
    );
  },
  // 删除todo
  removeTodoById(todos, id) {
    todos = todos.slice();
    return todos.filter((todo) => todo.id !== id);
  },
  // 改变todo状态
  changeStateByIsFinished(todos, id) {
    todos = todos.slice();
    const todo = todos.find((todo) => todo.id === id);
    todo.isFinished = !todo.isFinished;
    return todos;
  },
};
