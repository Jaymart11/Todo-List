import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
    };
  }

  handleDelete = () => {
    this.props.removeTodo(this.props.id);
  };
  editTask = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  handleUpdate = (evt) => {
    evt.preventDefault();
    const { updateTodo, id } = this.props;
    updateTodo(id, this.state.task);
    this.editTask();
  };
  handleUpdateChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleUpdateChange}
              name="task"
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.editTask}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}
