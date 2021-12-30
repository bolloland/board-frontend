import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitNewGame } from '../actions';

const AddGame = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

            const [inputs, setInputs] = useState({});
        
            const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
            }
        
            const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(submitNewGame(inputs))
            console.log(inputs)
                // navigate("/")
               navigate("/")
            alert("You added a new game!");
        }
    
        return (
            <form onSubmit={handleSubmit} className="new-game-form">
            <label>Enter game info below:<br></br>
            <input 
                type="text" 
                name="name" 
                value={inputs.name || ""} 
                placeholder="enter game name here"
                onChange={handleChange}
            /> <br/>
            <input 
                type="text" 
                name="year_published" 
                value={inputs.year_published || ""} 
                placeholder="year game was published"
                onChange={handleChange}
                /><br/>
            <input 
                type="text" 
                name="thumb_url" 
                value={inputs.thumb_url || ""} 
                placeholder="place image here"
                onChange={handleChange}
                /><br/>
            <input className="description-box"
                type="text" 
                name="description" 
                value={inputs.description || ""} 
                placeholder="write a short description here"
                onChange={handleChange}
                />
            <br></br>
            </label>
                <input type="submit" />
            </form>
        )
    
}

export default AddGame
