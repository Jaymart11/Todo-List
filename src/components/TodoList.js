import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }
  addTask = (task) => {
    this.setState((state) => ({ todos: [...state.todos, task] }));
  };
  deleteTask = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };
  updateTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        removeTodo={this.deleteTask}
        id={todo.id}
        updateTodo={this.updateTodo}
      />
    ));
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}
