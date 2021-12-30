import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showHideReviewForm } from '../actions'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { useEffect } from 'react'


const ShowGame = () => {
    
    const pathname = (window.location.pathname.split("/"))
    const pathID = pathname[pathname.length-1]
    // const slug = pathname[pathname.length-1]
    const games = useSelector(state => state.gamesReducer.storeGames)
    
    const showHide = useSelector(state => state.gamesReducer.showHideReviews)
    const dispatch = useDispatch()

        const [showRevForm, setShowRevForm] = useState(false)
        // LATER: change text on buttonClick?
        const revealForm = () => setShowRevForm(!showRevForm)
            

    // let game = games.find(g => g.name === slug)
    let game = games.find(g => g.id == pathID)
    
    const replaceHTML = (str) => {
        return str.replace(/<[^>]*>?/gm, '')
    }
    const replacequotes = (str) => {
        return str.replace(/(&quot\;)/gm,"\"")
    }

    useEffect(() => {
        
    }, [games])

    return (
        <div className="one-game">
            <h1> {game && game.name} ({game && game.year_published})</h1>
            <img className="thumb-show" src={game && game.thumb_url} alt=""  />
            
            <div className="description-container">{game && replacequotes(replaceHTML(game.description))}</div>
            <br></br><br></br>

            <button>Add To Collection</button><br></br><br></br>

            Rating: {game && game.avg_rating} / 5 <br></br><br></br>

            <button onClick={revealForm}>Add A Review  </button>
            {showRevForm ? <ReviewForm game={game}/> : !showRevForm }

            Reviews To Date: {game && game.reviews.length}<br></br>
            {game && game.reviews.map(rev => <Review rev={rev} />)}
            
        </div>
    )
}

export default ShowGame
