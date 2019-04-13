import React, { Component } from 'react';
import Display from './display/Display'
import DashBoard from './dashboard/Dashboard'

import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  }

  handleRest = e => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }
  
  ballClicker = e => {
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1}
      })
    } else {
      this.handleRest(e)
    }
  }

  strikeClicker = e => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1}
      })
    } else {
      this.handleRest(e)
    }
  }

  foulClicker = e => {
    if (this.state.strikes < 3) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 }
      })
    } else {
      this.handleRest(e)
    }
  }
  
  hitClicker = e => {
    this.handleRest(e)
  }

  render() {
    return (
      <div className="App">
        <h2>Hello Baseball</h2>
        <Display count={this.state}/>
        <DashBoard 
          ballClicker={this.ballClicker}
          strikeClicker={this.strikeClicker}
          foulClicker={this.foulClicker}
          hitClicker={this.hitClicker}
        />    
      </div>
    )
  }
}

export default App;
