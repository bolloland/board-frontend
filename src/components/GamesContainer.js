import React from 'react'
import '../styles.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Game from './Game'
import "../styles.css"  

const GamesContainer = () => {
    
    const games = useSelector(state => state.gamesReducer.storeGames)
    
    useEffect(() => {
        console.log(games, "game update")
    }, [games])

    return (
        <div className="allgames-container">
         {/* && serves as an if>then statement */}
         {games.map(game => <Game gamedata={game}/>)}

            <h3>games go here!</h3>

        </div>
    )
}

export default GamesContainer
