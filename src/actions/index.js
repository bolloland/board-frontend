import { 
  LOAD_GAMES, 
  SUBMIT_NEW_GAME, 
  ADD_COLLECT, 
  SUBMIT_NEW_REVIEW, 
  REMOVE_FROM_COLLECT, 
  GET_ONE_GAME, 
  UNSET_ONE_GAME, 
  HIDE_SEARCH_BUTTON, 
  SHOW_SEARCH_BUTTON
} from "./types"
import { useNavigate } from "react-router-dom"

// ACTION -> describes WHAT you want to do, 
// where we name it using "type:" || **function that returns an object**
// export const increment = (amount) => {
//     return {
//         type: 'INCREMENT'   //increment() when used in onClick{}      }

//**b/c fetch is asynch, we need thunk to (1)intercept the request and thunk will then (2)dispatch to the reducer when complete
// ASYNCH FORMAT - BLOG POST
//only once we get a response from our API call, can we manually dispatch the action of LOAD_GAMES
export const fetchGames = () => (dispatch) => {
    fetch("http://localhost:3000/games")
    .then(resp => resp.json())
    .then(allGames => {
        allGames.forEach(game => game.review_count = 0)
      
        dispatch({                // sends to my reducer
          type: LOAD_GAMES,
          payload: allGames
        })
    })
}

export const submitNewGame = (inputs, navigate) => (dispatch) =>{

  fetch("http://localhost:3000/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(inputs)
  })
  .then(resp => resp.json())
  .then(gamedata => {
    
    console.log(gamedata, "gamedata")
    dispatch({                // sends to my reducer
      type: SUBMIT_NEW_GAME,
      payload: gamedata
    })
    navigate(`/games/${gamedata.id}`, {state: {gamedata}})
})
}

// export const setSelectedGame = (id) => (dispatch) => {
//   fetch(`http://localhost:3000/games/${id}`)
//     .then(resp => resp.json())
//     .then(game =>
//         dispatch({                // sends to my reducer
//           type: GET_ONE_GAME,
//           payload: game
//         })
//     )
// }

export const submitNewReview = (reviewData) => (dispatch) =>{
  
  fetch(`http://localhost:3000/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(reviewData)
  })
  .then(resp => resp.json())
  .then(newReviewData => {
    console.log(newReviewData, "newReviewData")
    dispatch({                // sends to my reducer
      type: SUBMIT_NEW_REVIEW,
      payload: newReviewData
    })
    // navigate(`/games/${newReviewData.game_id}`)
    
})
}

export const addToCollection = (item) => ({type: ADD_COLLECT, payload: item})
export const removeFromCollection = (item) => ({type: REMOVE_FROM_COLLECT, payload: item})
export const unsetOneGame = () => ({type: UNSET_ONE_GAME})
export const searchButtonShow = () => ({type: SHOW_SEARCH_BUTTON})
export const searchButtonHide = () => ({type: HIDE_SEARCH_BUTTON})
// 
// thunk allows us to create a function that 
// passes dispatch into the results of the fetch
