import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Game from './Game'

const SearchContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allgames = useSelector(state => state.gamesReducer.storeGames)
    
    const [searchData, setSearchData] = useState("");
    
    let gameNames = allgames.filter(g => g.name.toLowerCase().includes(searchData.toLowerCase()) )
    
    const handleChange = (event) => {
        const value = event.target.value;
        setSearchData(value)
    }
    // console.log(gameNames)

    return (
        <form>
        
            <div className="searchbar">
                
                <input 
                type="text"
                placeholder="enter any part of the game's name"
                value={searchData || ""}
                onChange={handleChange}
            />
            </div>
            
            <div className="search-field">
                {gameNames.map(game => <Game gamedata={game}/>)}
            </div>

        </form>
    )
}

export default SearchContainer
