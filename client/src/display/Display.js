import React from 'react'

class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            balls: 0,
            strikes: 0
        }
    }

    ballclicker = e => {
        e.preventDefault()
        this.setState({
            balls: this.state.balls + 1
        })
    }
    
    render() {
        return (
            <div>
                <h2>Display Me</h2>
                <h2 data-testid="balls">balls</h2>
                <h2 data-testid="ballsCount">{this.state.balls}</h2>
                <h2 data-testid="strikes">strikes</h2>
                <h2 data-testid="strikesCount">{this.state.strikes}</h2>
                <button onClick={this.ballclicker}>Balls Button</button>
            </div>
        )
    }    
}

export default Display;