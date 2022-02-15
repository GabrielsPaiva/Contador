import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    number: 0,
  };

  add = () => {
    const number = this.state.number
    if (number < 10) {
      this.setState({
        number: number + 1,
      });
    }
  };

  remove = () => {
    const number = this.state.number
    if (number > 0) {
      this.setState({
        number: number - 1,
      });
    }
  };

  render() {
    const number = this.state.number
    const add = this.add
    const remove = this.remove
    return (
      <div className="counter">
        <h1 className="number"> {number} </h1>
        <div className="buttons_box">
          <button className="plus_button" onClick={add}>+</button>
          <button className="minus_button" onClick={remove}>-</button>
        </div>
      </div>
    );
  }
}
