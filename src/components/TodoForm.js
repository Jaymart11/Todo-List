import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTask({ ...this.state, id: uuidv4() });
    this.setState({ task: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            id="task"
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChange}
          />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}
