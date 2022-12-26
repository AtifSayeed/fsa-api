import React from "react";
class Counter extends React.Component {
  state = {
    count: 0,
  };
  inc = () => {
    const current = this.state.count;
    this.setState({ count: current + 1 });
  };
  dec = () => {
    const current = this.state.count;
    this.setState({ count: current - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter {this.state.count}</h1>
        <button onClick={this.inc}>++</button>
        <button onClick={this.dec}>--</button>
      </div>
    );
  }
}
export default Counter;
