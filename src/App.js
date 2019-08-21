import React, { Component, Fragment } from 'react';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (<Fragment>
      <div className={this.state.status ? 'hidden' : 'show'}>class样式更改</div>
      <button onClick={this.handleClick}>toggle</button>
    </Fragment>)
  }
  handleClick() {
    this.setState(() => {
      return {
        status: this.state.status ? false : true
      }
    })
  }
}


export default App