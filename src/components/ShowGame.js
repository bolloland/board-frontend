import React from 'react'
import { useState } from 'react'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { useParams, useLocation } from 'react-router-dom'

const ShowGame = () => {
    
    const location = useLocation()
    console.log(location)

    const {id} = useParams()

    let game = location.state.gamedata
    const [showRevForm, setShowRevForm] = useState(false)
    const revealForm = () => setShowRevForm(!showRevForm)
    const replaceHTML = (str) => {
        return str.replace(/<[^>]*>?/gm, '')
    }
    const replacequotes = (str) => {
        return str.replace(/(&quot\;)/gm,"\"")
    }

    return (
        <div className="one-game">
            <h1> {game && game.name} ({game && game.year_published})</h1>
            <img className="thumb-show" src={game && game.thumb_url} alt=""  />
            
            <div className="description-container">Description: {game && replacequotes(replaceHTML(game.description))}</div>
            <br></br><br></br>

            Rating: {game && game.avg_rating} / 5 <br></br><br></br>

            <button className="button" onClick={revealForm}>Add A Review  </button>
            {showRevForm ? <ReviewForm game={game}/> : !showRevForm }

            Reviews To Date: {game && game.reviews && game.reviews.length}<br></br>
            {game && game.reviews && game.reviews.map(rev => <Review rev={rev} />)}
            
        </div>
    )
}

export default ShowGame
