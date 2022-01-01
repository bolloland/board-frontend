import React from 'react'
import { useNavigate, Routes, Route } from 'react-router'
import "../styles.css"  
import MyCollection from './MyCollection'

const Navbar = () => {

    const navigate = useNavigate()


    return (
        <div className="navbar">
        <strong className="title">BOARD HOARD  </strong>
        <button className="button" onClick={() => { navigate("/") }}>Game Rack</button>
        <button className="button" onClick={() => { navigate("/myCollection") }}>My Collection</button>
        <button className="button" onClick={() => { navigate("/add-game") }}>Add A Game</button>
        <button className="button" onClick={() => { navigate("/search") }}>Search Games</button>
        </div>
    )
}

   

export default Navbar
