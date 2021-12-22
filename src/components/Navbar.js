import React from 'react'
import { useNavigate, Routes, Route } from 'react-router'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import "../styles.css"  
import MyCollection from './MyCollection'

const Navbar = () => {

    const navigate = useNavigate()


    return (
        <div className="navbar">
            <h5>NAVBAR</h5>
        <button onClick={() => { navigate("/") }}>HOME</button>
        <button onClick={() => { navigate("/myCollection") }}>My Collection</button>
        <button onClick={() => { navigate("/page3") }}>Add A Game</button>
        <button onClick={() => { navigate("/page4") }}>PAGE4</button>
        </div>
    )
}

   

export default Navbar
