import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCollection } from '../actions'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AddToCollectionButton from './AddToCollectionButton'
import GameTitle from './GameTitle'
import { useState } from 'react'

const Game = ({gamedata}) => {
    // console.log({gamedata})

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const myCollection = useSelector(state => state.gamesReducer.myCollection)

    let collected = myCollection.find(g => g.id === gamedata.id)
    const [counter, setCounter] = useState(0)


    return (
        <div className="game-container">
            {/* <h4>{gamedata.name}</h4><br></br> */}
            <GameTitle gamedata={gamedata} />
            
            {/* is this ^^^ the issue with slugs URL? */}
            <img onClick={() => { navigate(`/games/${gamedata.id}`) }} className="thumb" src={gamedata.thumb_url} alt="" />

            <h5>Average Rating: <br></br>
            {gamedata.avg_rating ? gamedata.avg_rating + " / 5": "n/a"}</h5>
            
            {/* {!collected ? <button className="button" onClick={(event) => {
                event.preventDefault()
                dispatch(addToCollection(gamedata))}
                }>add to collection</button> : <button className="button" >in your collection</button>} */}
            
            <AddToCollectionButton gamedata={gamedata} />
        {/* <button>{gamedata.review_count === 0 ? "write a review" : "see " + gamedata.reviews.count + " review(s)"}</button> */}
    
        {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}

        </div>
        
    )
    
}

export default Game
