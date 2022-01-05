import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCollection, removeFromCollection } from '../actions'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import AddToCollectionButton from './AddToCollectionButton'
import GameTitle from './GameTitle'

const Game = ({gamedata}) => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const myCollection = useSelector(state => state.gamesReducer.myCollection)

    let collected = myCollection.find(g => g.id === gamedata.id)

    return (
        <div className="game-container">
            {/* <h4>{gamedata.name}</h4><br></br> */}
            <GameTitle gamedata={gamedata} />
            
            {/* is this ^^^ the issue with slugs URL? */}
            <img onClick={() => { navigate(`/games/${gamedata.id}`, {state: {gamedata}}) }} className="thumb" src={gamedata.thumb_url} alt="" />

            <h5>Average Rating: <br></br>
            {gamedata.avg_rating ? gamedata.avg_rating + " / 5": "n/a"}</h5>
            
            <div className="add-to-collection-button">

            {!collected ? <button className="button" onClick={(event) => {
                event.preventDefault()
                dispatch(addToCollection(gamedata))}
                }>add to collection</button> : 
                <button className="button" onClick={(event) => {
                    event.preventDefault()
                    dispatch(removeFromCollection(gamedata))}
                }
                >remove from collection</button>}
                </div>
        
        {/* {!collected ? <button className="button" onClick={(event) => {
                event.preventDefault()
                dispatch(addToCollection(gamedata))}
                }>add to collection</button> : <button className="button" >in your collection</button>} */}
            
            {/* <AddToCollectionButton gamedata={gamedata} /> */}
        {/* <button>{gamedata.review_count === 0 ? "write a review" : "see " + gamedata.reviews.count + " review(s)"}</button> */}
    
        </div>
        
    )
    
}

export default Game
