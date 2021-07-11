import React, { Component } from "react";
import store from "../store";

export default class TodoContent extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }
  setTodo() {
    this.setState({
      todoList: store.getState().todos,
    });
  }
  componentDidMount() {
    this.setTodo();
    //组件想要获取redux最新状态的话，需要调用store.subscribe订阅方法才可以
    //监控reducer的新状态的返回，如果reducer返回新状态，那么这个callback就会执行。
    store.subscribe(() => {
      this.setTodo();
    });
  }
  render() {
    const { todoList } = this.state;
    console.log("todoList", todoList);
    return (
      <div>
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
