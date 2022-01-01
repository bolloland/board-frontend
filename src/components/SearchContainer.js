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
        // console.log(gameNames)
        // setFoundGames(gameNames)
    
    const handleChange = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        // console.log(value)
        setSearchData(value)
    }
    // console.log(searchData)
    console.log(gameNames)
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // submitNewSearch(searchData)
    //     alert("Searching...!");
    // }

    return (
        <form>
        {/* // <form onSubmit={handleSubmit}> */}
        <div className="search-field">
            <h2>Search Our Games!</h2>
            <input 
                type="text"
                placeholder="Search..."
                value={searchData || ""}
                onChange={handleChange}
            />
            {gameNames.map(game => <Game gamedata={game}/>)}

        </div>
        </form>
    )
}

export default SearchContainer
