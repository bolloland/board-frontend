import React from 'react'
import { useNavigate, Routes, Route } from 'react-router'
import "../styles.css"  
import MyCollection from './MyCollection'

const Navbar = () => {

    const navigate = useNavigate()


    return (
        <div className="navbar">
            <h5>NAVBAR</h5>
        <button onClick={() => { navigate("/") }}>HOME</button>
        <button onClick={() => { navigate("/myCollection") }}>My Collection</button>
        <button onClick={() => { navigate("/add-game") }}>Add A Game</button>
        <button onClick={() => { navigate("/search") }}>SEARCH</button>
        </div>
    )
}

   

export default Navbar
