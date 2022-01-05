import React from 'react'
import { useNavigate, Routes, Route } from 'react-router'
import "../styles.css"  
import MyCollection from './MyCollection'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const navigate = useNavigate()
    const [showSearchButton, setShowSearchButton] = useState(true)
    const pathname = (window.location.pathname.split("/"))
    
    useEffect(() => {
        !pathname.includes("search") && setShowSearchButton(true)
    }, [pathname])

    const handleSearchButtonClick = () => {
        setShowSearchButton(!showSearchButton)
        navigate("/search")
    }
        
    return (
        <div className="navbar">
        <strong className="title">BOARD HOARD  </strong>
        <button className="button" onClick={() => { navigate("/") }}>Game Rack</button>
        <button className="button" onClick={() => { navigate("/myCollection") }}>My Collection</button>
        <button className="button" onClick={() => { navigate("/add-game") }}>Add A Game</button>
        {/* <button className="button" onClick={handleSearchButtonClick}>Search Games</button> */}
        {showSearchButton ? <button className="button" onClick={handleSearchButtonClick}>Search Games</button> : null}

        </div>
    )
}
//

export default Navbar
