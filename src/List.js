import React, { Component } from 'react'

class List extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    fetch('data.json')
      .then(response => response.json())
      .then(({ data }) => this.setState({ items: data }))
  }
  renderItems() {
    return this.state.items.map(item => <li key={item}>{item}</li>)
  }
  render () {
    return (<ul>
      {this.renderItems()}
    </ul>)
  }
}

export default List
