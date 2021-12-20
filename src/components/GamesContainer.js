import React from 'react'
import '../styles.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import Game from './Game'
import "../styles.css"  
import { fetchGames } from '../actions'
import { connect } from 'react-redux'

const GamesContainer = () => {
    
    const theGames = useSelector(state => state.gamesReducer.storeGames)
    useEffect(() => console.log(theGames))
    
    return (
        <div className="games-container">
            <h3>games go here!</h3>

        </div>
    )
}
//connect connects a React component to a Store
export default connect(null, { fetchGames })(GamesContainer)
