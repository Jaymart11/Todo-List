import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosForm1 from "./TodosForm1";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      editedTodo: "",
    };
  }
  addTask = (item) => {
    const uniqueKey = { ...item, id: uuidv4(), done: false, isEdit: false };
    this.setState((state) => ({
      todos: [...state.todos, uniqueKey],
    }));
  };
  deleteTask = (idx) => {
    this.setState((state) => {
      const todos = state.todos.filter((item, idx1) => idx !== idx1);

      return { todos };
    });
  };
  editTask = (idx) => {
    const todos = [...this.state.todos];
    todos[idx] = { ...todos[idx] };
    todos[idx].isEdit = !this.state.todos[idx].isEdit;
    this.setState({ todos });
  };
  strikeText = (idx) => {
    // const findTask = this.state.todos.map((task) => {
    //   if (task.id === idx) {
    //     return { ...task, done: !this.state.todos[idx1].done };
    //   } else {
    //     return task;
    //   }
    // });
    // this.setState({ todos: findTask });
    const todos = [...this.state.todos];
    todos[idx] = { ...todos[idx] };
    todos[idx].done = !this.state.todos[idx].done;
    this.setState({ todos });
  };
  updateChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  submitUpdate = (evt, idx) => {
    evt.preventDefault();
    const todos = [...this.state.todos];
    todos[idx] = { ...todos[idx] };
    todos[idx].task = this.state.editedTodo;
    todos[idx].isEdit = false;
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        {this.state.todos.map((todo, idx) => {
          if (todo.isEdit) {
            return (
              <div>
                <form onSubmit={(evt) => this.submitUpdate(evt, idx)}>
                  <input
                    type="text"
                    name="editedTodo"
                    defaultValue={this.state.todos[idx].task}
                    onChange={this.updateChange}
                  />
                  <button type="submit">Save</button>
                </form>
              </div>
            );
          } else {
            return (
              <div>
                <h1
                  key={todo.id}
                  onClick={() => this.strikeText(idx)}
                  className={todo.done ? "strike" : null}>
                  {todo.task}
                </h1>
                <button onClick={() => this.editTask(idx)}>update</button>|
                <button onClick={() => this.deleteTask(idx)}>Delete</button>|
              </div>
            );
          }
        })}
        <TodosForm1 addTask={this.addTask} />
      </div>
    );
  }
}
