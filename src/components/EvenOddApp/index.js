// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, type: 'Even'}

  onIncrement = () => {
    const {count} = this.state
    const number = Math.round(Math.random() * 100)

    const numType = (count + number) % 2 === 0 ? 'Even' : 'Odd'

    this.setState({count: count + number, type: numType})
  }

  render() {
    const {count, type} = this.state

    return (
      <div className="bg_container">
        <div className="main_container">
          <h1>Count {count}</h1>
          <p className="count">Count is {type}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
