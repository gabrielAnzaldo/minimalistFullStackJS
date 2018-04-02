import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    number: 45,
  };

  render() {
    return (
      <div>Hello JS world number {this.state.number}!</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
