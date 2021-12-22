import { LOAD_GAMES } from "./types"
import { ADD_COLLECT } from "./types"

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
        console.log(allGames)
        dispatch({                // sends to my reducer
          type: LOAD_GAMES,
          payload: allGames
        })
    })
}

export const addToCollection = (item) => ({type: ADD_COLLECT, payload: item})

// 
// thunk allows us to create a function that 
// passes dispatch into the results of the fetch
