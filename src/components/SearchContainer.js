import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const SearchContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchField = useSelector(state => state.gamesReducer.storeGames)
    console.log(searchField)
    const [searchData, setSearchData] = useState("");

    const handleChange = (event) => {
        // const name = event.target.name;
        const value = event.target.value;
        // console.log(value)
        setSearchData(value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(submitNewSearch(searchData))
        
        
        alert("Searching...!");
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="search-field">
            <h2>search container</h2>
            <input 
                type="text"
                placeholder="Search..."
                value={searchData}
                onChange={handleChange}
            />
            <input type="submit" />
        </div>
        </form>
    )
}

export default SearchContainer
