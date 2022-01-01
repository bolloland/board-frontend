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
            <div className="new-game-form">
                <form onSubmit={handleSubmit} >
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
                        placeholder=".jpeg image address here"
                        onChange={handleChange}
                        /><br/>
                    <input 
                        type="text" 
                        name="description" 
                        // className="description-box"
                        size="50"
                        value={inputs.description || ""} 
                        placeholder="write a short description here"
                        onChange={handleChange}
                        />
                    <br></br>
                    </label>
                    <input className="button" type="submit" value="submit new game" />
                </form>
            </div>
        )
    
}

export default AddGame
