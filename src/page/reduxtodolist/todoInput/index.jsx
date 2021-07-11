import React, { Component, createRef } from "react";
import actionCreators from "../action";

export default class TodoInput extends Component {
  constructor() {
    super();
    this.input = createRef();
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      actionCreators.addNewTodo(this.input.current.value);
      this.input.current.value = "";
    }
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.input} onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}
