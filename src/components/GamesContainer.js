import React from 'react'
import '../styles.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Game from './Game'
// import { useState } from 'react'

const GamesContainer = () => {
    
    const games = useSelector(state => state.gamesReducer.storeGames)   
    // const [ratedGames, setRatedGames] = useState(false)
    
    useEffect(() => {
        console.log(games, "games updated")
    }, [games])
    
    // const handleOnclick = (event) => {
    //     event.preventDefault()
    //     setRatedGames(!ratedGames)
    // }

    // const filterGames = (games) => {
    //     if (ratedGames) {
    //         return games.filter(game => game.avg_rating > 4) 
    //     } else {
    //        return games
    //     }
    // }

    // const [incrementValue, setIncrementValue] = useState(1)

    // const handleValueChange = (event) => {
    //     // debugger
    //     // const name = event.target.name;
    //     // const value = event.target.value;
    //     // setValue(value => ({...value, [name]: value}))
    //     setIncrementValue(event.target.value)
    //     // console.log(incrementValue)
    // }

    return (
        <div className="allgames-container"> 
        {games.map(game => <Game key={game.id} gamedata={game}/>)}
        </div>
        
    )
}

export default GamesContainer

        // <button className="button" onClick={handleOnclick}>showgames w/ rating over 4</button>
        // <div>
        //     <input 
        //         type="text"
        //         name="number"
        //         value={incrementValue}
        //         onChange={handleValueChange}
        //     />

        // </div>
        // <div className="allgames-container">
         
        //  {/* && serves as an if>then statement */}
        //  {filterGames(games).map(game => <Game key={game.id} gamedata={game} incrementValue={incrementValue}/>)}
         

        // </div>