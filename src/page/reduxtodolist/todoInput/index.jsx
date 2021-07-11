import React, { Component, createRef } from "react";
import { Input } from "antd";
import actionCreators from "../action";

export default class TodoInput extends Component {
  constructor() {
    super();
    this.ref = createRef();
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      actionCreators.addNewTodo(this.ref.current.value);
      console.log(this.input.ref);
      this.ref.current.value = "";
    }
  };
  render() {
    return (
      <div>
        <Input type="text" ref={this.ref} value={} onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}
