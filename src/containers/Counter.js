import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 5 };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }

  plus() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }
  minus() {
    this.setState(prevState => ({
      counter:
        prevState.counter === 1 ? prevState.counter : prevState.counter - 1,
    }));
  }

  render() {
    return (
      <div>
        {this.props.children(this.state.counter, this.plus, this.minus)}
      </div>
    );
  }
}

export default Counter;
