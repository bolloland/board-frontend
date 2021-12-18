// ACTION -> describes WHAT you want to do, 
// where we name it using "type:" || **function that returns an object**
// export const increment = (amount) => {
//     return {
//         type: 'INCREMENT'   //increment() when used in onClick{}
//          payload: amount
//     }
// }

const gamesURL = "http://localhost:3000/games"

export const RENDER_GAMES = "RENDER_GAMES"

export const renderGames = (games) => ({
    type: "RENDER_GAMES",
    payload: games,
})

// b/c it's asynch, we need thunk to intercept the request and thunk will dispatch it when complete
export const getGames = () => (dispatch) => {
    fetch(gamesURL)
    .then(resp => resp.json())
    .then(allGames => {
      dispatch({                // sends to my reducer
          type: "GET_GAMES",
          payload: allGames
      })
    })
}

export const loadGames = () => async (dispatch, getState) => {
    const games = await fetch(gamesURL)
    .then(resp => resp.json())
    .then(storeGames => {
      dispatch({                // sends to my reducer
          type: "GET_GAMES",
          payload: storeGames
      })
    })
}
