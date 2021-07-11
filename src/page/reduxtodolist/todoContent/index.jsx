import React, { Component } from "react";
import { Button, Checkbox } from "antd";
import actionCreator from "../action";
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
  // 删除
  removeTodo = (id) => {
    actionCreator.removeTodoById(id);
  };
  // 是否已做（改变状态）
  handleChangeIsTodo = (id) => {
    actionCreator.changeStateByIsFinished(id);
  };
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
    return (
      <div>
        <ul>
          {todoList?.map((item) => (
            <li key={item.id} style={{ listStyleType: "none" }}>
              <Checkbox
                onChange={() => this.handleChangeIsTodo(item.id)}
                checked={item.isFinished}
              />
              {item.title}
              <Button onClick={() => this.removeTodo(item.id)}>删除</Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
