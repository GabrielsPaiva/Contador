import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    number: 0,
  };

  add = () => {
    if (this.state.number < 10) {
      this.setState({
        number: this.state.number + 1,
      });
    }
  };

  remove = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    }
  };

  render() {
    return (
      <div className="counter">
        <h1 className="number"> {this.state.number} </h1>
        <div className="buttons_box">
          <button className="plus_button" onClick={this.add.bind(this)}>+</button>
          <button className="minus_button" onClick={this.remove.bind(this)}>-</button>
        </div>
      </div>
    );
  }
}
