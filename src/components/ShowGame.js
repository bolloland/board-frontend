import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showHideReviewForm } from '../actions'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { setSelectedGame, unsetOneGame } from '../actions'
import AddToCollectionButton from './AddToCollectionButton'

const ShowGame = () => {
    console.log(useParams())
    const {id} = useParams()
    // const pathname = (window.location.pathname.split("/"))
    // const pathID = pathname[pathname.length-1]
    // const slug = pathname[pathname.length-1]
    // const games = useSelector(state => state.gamesReducer.storeGames)
    const game = useSelector(state => state.gamesReducer.oneGame)
    console.log(game)
    const showHide = useSelector(state => state.gamesReducer.showHideReviews)
    const dispatch = useDispatch()

        const [showRevForm, setShowRevForm] = useState(false)
        // LATER: change text on buttonClick?
        const revealForm = () => setShowRevForm(!showRevForm)
            
useEffect(() => {
    dispatch(setSelectedGame(id)) 
    return dispatch(unsetOneGame())
}, [])
    
    // let game = games.find(g => g.name === slug)
    // let game = games.find(g => g.id == pathID)
    
    const replaceHTML = (str) => {
        return str.replace(/<[^>]*>?/gm, '')
    }
    const replacequotes = (str) => {
        return str.replace(/(&quot\;)/gm,"\"")
    }

    // useEffect(() => {
        
    // }, [games])
    console.log(game)
    return (
        <div className="one-game">
            <h1> {game && game.name} ({game && game.year_published})</h1>
            <img className="thumb-show" src={game && game.thumb_url} alt=""  />
            
            <div className="description-container">Description: {game && replacequotes(replaceHTML(game.description))}</div>
            <br></br><br></br>

            {/* <AddToCollectionButton game={game}/>  */}
            <button className="button">Add To Collection</button><br></br><br></br>

            Rating: {game && game.avg_rating} / 5 <br></br><br></br>

            <button className="button" onClick={revealForm}>Add A Review  </button>
            {showRevForm ? <ReviewForm game={game}/> : !showRevForm }

            Reviews To Date: {game && game.reviews.length}<br></br>
            {game && game.reviews.map(rev => <Review rev={rev} />)}
            
        </div>
    )
}

export default ShowGame
