import React, { Component } from "react";

export default class TodosForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTask(this.state);
    this.setState({ task: "" });
  };
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
