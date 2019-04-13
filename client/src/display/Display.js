import React from 'react'

const Display = props => { 
    const balls = props.count.balls
    const strikes = props.count.strikes

    return (
        <div>
            <h2>Display Scoreboard</h2>
            <h2 data-testid="balls">balls {balls} </h2>
            <h2 data-testid="strikes">strikes {strikes}</h2>      
        </div>
    )
}

export default Display;