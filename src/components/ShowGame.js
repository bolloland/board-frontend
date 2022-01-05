import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showHideReviewForm } from '../actions'
import ReviewForm from './ReviewForm'
import Review from './Review'
import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { setSelectedGame, unsetOneGame } from '../actions'
import AddToCollectionButton from './AddToCollectionButton'
import { addToCollection, removeFromCollection } from '../actions'
import MyCollection from './MyCollection'


const ShowGame = () => {
    
    const location = useLocation()
    console.log(location)

    const {id} = useParams()

    let game = location.state.gamedata
    console.log(game, "showpage gamedata")
    const showHide = useSelector(state => state.gamesReducer.showHideReviews)
    const dispatch = useDispatch()
    const allGames = useSelector(state => state.gamesReducer.storeGames)
    const myCollection = useSelector(state => state.gamesReducer.myCollection)
    // console.log(myCollection, "myCollection")

    // let collected = myCollection.find(g => g.id == game.id)

        const [showRevForm, setShowRevForm] = useState(false)
        // LATER: change text on buttonClick?
        const revealForm = () => setShowRevForm(!showRevForm)
            
// useEffect(() => {
//     dispatch(setSelectedGame(id)) 
//     return dispatch(unsetOneGame())
// }, [])

    const replaceHTML = (str) => {
        return str.replace(/<[^>]*>?/gm, '')
    }
    const replacequotes = (str) => {
        return str.replace(/(&quot\;)/gm,"\"")
    }

    // useEffect(() => {
        
    // }, [games])
    // console.log(game)
    return (
        <div className="one-game">
            <h1> {game && game.name} ({game && game.year_published})</h1>
            <img className="thumb-show" src={game && game.thumb_url} alt=""  />
            
            <div className="description-container">Description: {game && replacequotes(replaceHTML(game.description))}</div>
            <br></br><br></br>

            {/* <AddToCollectionButton game={game}/>  */}
            {/* <button className="button">Add To Collection</button><br></br><br></br> */}

            {/* {!collected ? <button className="button" onClick={(event) => {
                event.preventDefault()
                dispatch(addToCollection(game))}
                }>add to collection</button> : 
                <button className="button" onClick={(event) => {
                    event.preventDefault()
                    console.log(game)
                    dispatch(removeFromCollection(game))}
                }
                >remove from collection</button>} */}



            Rating: {game && game.avg_rating} / 5 <br></br><br></br>

            <button className="button" onClick={revealForm}>Add A Review  </button>
            {showRevForm ? <ReviewForm game={game}/> : !showRevForm }

            Reviews To Date: {game && game.reviews && game.reviews.length}<br></br>
            {game && game.reviews && game.reviews.map(rev => <Review rev={rev} />)}
            
        </div>
    )
}

export default ShowGame
