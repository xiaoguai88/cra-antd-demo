import state from "../state";

const reducer = (prevState = state, action) => {
  const new_state = { ...prevState };
  switch (action.type) {
    case "addNewTodo":
      new_state.todos.push({
        id: getId(new_state.todos),
        title: action.title,
        isFinished: false,
      });
      break;
  }

  return new_state;
};
const getId = (todos) => {
  todos = todos.slice();
  if (todos.length === 0) return 1;
  return (
    todos.sort((a, b) => {
      return b.id - a.id;
    })[0].id + 1
  );
};
export default reducer;
