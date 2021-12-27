import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCollection } from '../actions'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AddToCollectionButton from './AddToCollectionButton'

const Game = ({gamedata}) => {
    // gamedata is each game

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const myCollection = useSelector(state => state.gamesReducer.myCollection)

    
    let collected = myCollection.find(g => g.id == gamedata.id)
    

    return (
        <div className="game-container">
            {gamedata.name}<br />

            <img onClick={() => { navigate(`/games/${gamedata.name}`) }} className="thumb" src={gamedata.thumb_url} alt="" />

            Average Rating: <br />
           {gamedata.avg_rating ? gamedata.avg_rating + " / 5": "n/a"}
            
            {!collected ? <button onClick={() => dispatch(addToCollection(gamedata))}>add to collection</button> : <button>"in your collection"</button>}
           
           
           <button>{gamedata.review_count == 0 ? "write a review" : "see " + gamedata.review_count + " review(s)"}</button>
       
        </div>
    )
}

export default Game
