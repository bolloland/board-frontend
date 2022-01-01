import React from 'react'

const GameTitle = (props) => {
    console.log(props)
    return (
        <div>
            <b>{props.gamedata.name}</b>
        </div>
    )
}
export default GameTitle
