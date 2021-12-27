import { LOAD_GAMES, SUBMIT_NEW_GAME, ADD_COLLECT, SHOW_HIDE_REVIEW_FORM } from "./types"
import { useNavigate } from "react-router-dom"



// ACTION -> describes WHAT you want to do, 
// where we name it using "type:" || **function that returns an object**
// export const increment = (amount) => {
//     return {
//         type: 'INCREMENT'   //increment() when used in onClick{}
//          payload: amount
//     }
// }

// // b/c it's asynch, we need thunk to intercept the request and thunk will dispatch it when complete
// ASYNCH FORMAT - BLOG POST
export const fetchGames = () => (dispatch) => {
    fetch("http://localhost:3000/games")
    .then(resp => resp.json())
    .then(allGames => {
      console.log(allGames, "allGames")
        dispatch({                // sends to my reducer
          type: LOAD_GAMES,
          payload: allGames
        })
    })
}

export const showHideReviewForm = () => ({type: SHOW_HIDE_REVIEW_FORM, payload: true})

export const submitNewGame = (inputs) => (dispatch) =>{

  fetch("http://localhost:3000/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(inputs)
  })
  .then(resp => resp.json())
  .then(newGameData => {
    // console.log(newGameData, "newGameData")
    dispatch({                // sends to my reducer
      type: SUBMIT_NEW_GAME,
      payload: newGameData
    })
    
})

}

export const addToCollection = (item) => ({type: ADD_COLLECT, payload: item})

// 
// thunk allows us to create a function that 
// passes dispatch into the results of the fetch
