import React from 'react'
import '../styles.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Game from './Game'

const GamesContainer = () => {
    
    const games = useSelector(state => state.gamesReducer.storeGames)
    // aka mapStateToProps ^^

    
    useEffect(() => {
        console.log(games, "game update")
    }, [games])

    return (
        <div className="allgames-container">
         {/* && serves as an if>then statement */}
         {games.map(game => <Game gamedata={game}/>)}


        </div>
    )
}

export default GamesContainer
