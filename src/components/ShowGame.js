import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showHideReviewForm } from '../actions'
import Review from './Review'

const ShowGame = () => {
    const pathname = (window.location.pathname.split("/"))
    const slug = pathname[pathname.length-1]
    const games = useSelector(state => state.gamesReducer.storeGames)
    const showHide = useSelector(state => state.gamesReducer.storeGames)
    const dispatch = useDispatch()

        const [showRevForm, setShowRevForm] = useState(false)
        const revealForm = () => setShowRevForm(!showRevForm)
        console.log(showRevForm, "review form status")

    let game = games.find(g => g.name === slug)
    console.log(game, "game")

    let fixedDescription = game.description.replace(/<\/?[^>]+(>|$)/g, '')
    // .gsub("&quot;", " ")

    return (
        <div className="one-game">
            <h1> {game && game.name} ({game.year_published})</h1>
            <img className="thumb-show" src={game && game.thumb_url} alt=""  />
            
            <div className="description-container">{fixedDescription }</div>
            <br></br><br></br>

            <button>Add To Collection</button><br></br><br></br>

            Rating: {game.avg_rating} / 5 <br></br><br></br>

            <button onClick={revealForm}>Add A Review - render review form </button>
            {showRevForm ? <Review /> : !showRevForm }

            Reviews To Date: {game.review_count}<br></br>
            game.reviews.map(r =Review review=r )
            
        </div>
    )
}

export default ShowGame
