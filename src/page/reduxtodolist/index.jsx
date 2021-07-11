import React, { Component } from 'react'
import TodoContent from './todoContent';
import TodoInput from './todoInput';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoContent />
      </div>
    )
  }
}
