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
            navigate(`/games/${inputs.name}`)
          alert("You added a new game!");
        }
      
        return (
          <form onSubmit={handleSubmit}>
            <label>Enter game info below:
            <input 
                type="text" 
                name="name" 
                value={inputs.name || ""} 
                placeholder="enter game name here"
                onChange={handleChange}
            /> <br/>
            <input 
                type="text" 
                name="thumb_url" 
                value={inputs.thumb_url || ""} 
                placeholder="place image here"
                onChange={handleChange}
                />
          
            </label>
                <input type="submit" />
            </form>
        )
    
}

export default AddGame
