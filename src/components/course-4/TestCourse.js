import React, { Component } from "react";
import "./testCourse.css";

function transform(offset) {
  const cos = Math.cos(offset);
  const sin = Math.sin(offset);
  return {
    transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
  };
}

class TestCourse extends Component {
  state = {
    styleOne: {},
    styleTwo: {}
  };

  onMouseOver = e => {
    this.setState({
      styleOne: transform(-e.clientX / e.clientY),
      styleTwo: transform(e.clientX / e.clientY)
    });
  };

  render() {
    return (
      <div>
        <div className="panel" style={this.state.styleOne} />
        <div className="panel" style={this.state.styleTwo} />
      </div>
    );
  }
}

export default TestCourse;
