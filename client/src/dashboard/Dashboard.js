import React from 'react'

const DashBoard = props => {

    return (
        <div>
            <button onClick={props.ballClicker}>Ball</button>
            <button onClick={props.strikeClicker}>Strike</button>
            <button onClick={props.foulClicker}>Foul</button>
            <button onClick={props.hitClicker}>Hit</button>
        </div>
    )
}

export default DashBoard