import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }
  render () {
    return (<div>
      <span data-testid="counter-value">{this.state.counter}</span>
      <span>
        <button onClick={this.handleClick}>count</button>
      </span>
      </div>)
  }
}

export default Counter
