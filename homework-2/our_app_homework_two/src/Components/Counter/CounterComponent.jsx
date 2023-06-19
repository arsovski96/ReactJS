import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1 < 0 ? 0 : prevState.count - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      count: parseInt(value, 10),
    });
  };

  render() {
    const { count } = this.state;
    const isEven = count % 2 === 0;
    const countText = isEven ? "Even" : "Odd";

    return (
      <div>
        <p>Count: {count}</p>
        <span>{countText}</span>
        <br />
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        <br />
        <input type="number" value={count} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default Counter;
