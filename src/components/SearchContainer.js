import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import Game from './Game'

const SearchContainer = () => {
    
    const [searchData, setSearchData] = useState("")
    
    const allgames = useSelector(state => state.gamesReducer.storeGames)
    let gameNames = allgames.filter(g => 
        g.name.toLowerCase().includes(searchData.toLowerCase()) )
        console.log(gameNames)
    
    const handleChange = (event) => {
        event.preventDefault()
        const value = event.target.value;
        setSearchData(value)
    }
    // console.log(gameNames)

    return (
        <div>
        <form className="searchbar">
            <div >
                <label>search: </label>
                <input 
                type="text"
                size="32"
                placeholder="enter any part of the game's name here..."
                value={searchData || ""}
                onChange={handleChange}
            />
            </div>
        </form> 
            <div className="search-field">
                {gameNames.map(game => <Game gamedata={game}/>)}
            </div>

        </div>
    )
}

export default SearchContainer
