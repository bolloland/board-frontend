import React from 'react'
import '../styles.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Game from './Game'
import { useState } from 'react'

const GamesContainer = () => {
    
    const games = useSelector(state => state.gamesReducer.storeGames)   
    const [ratedGames, setRatedGames] = useState(false)
    
    useEffect(() => {
        console.log(games, "games updated")
    }, [games])
    
    const handleOnclick = (event) => {
        event.preventDefault()
        setRatedGames(!ratedGames)
    }

    const filterGames = (games) => {
        if (ratedGames) {
            return games.filter(game => game.avg_rating > 4) 
        } else {
           return games
        }
    }

    return (
        <div> <button className="button" onClick={handleOnclick}>showgames w/ rating over 4</button>
        <div className="allgames-container">
         
         {/* && serves as an if>then statement */}
         {filterGames(games).map(game => <Game gamedata={game}/>)}
         {/* {games.map(game => <Game gamedata={game}/>)} */}

        </div></div>
    )
}

export default GamesContainer
