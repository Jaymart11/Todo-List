import React, { Component } from "react";
import Todos1 from "./Todos1";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <p>A Simple react Todo List App</p>
        <Todos1 />
      </div>
    );
  }
}
