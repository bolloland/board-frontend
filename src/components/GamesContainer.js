import React from 'react'
import '../styles.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Game from './Game'
import "../styles.css"  

const GamesContainer = () => {

    const totalGames = useSelector(state => state)
    console.log(totalGames)

    return (
        <div className="games-container">
            <h3>here's some games!</h3>

                
        </div>
    )
}

export default GamesContainer
