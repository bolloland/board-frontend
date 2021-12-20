const INITIAL_STATE = {
    hello: "hey, Ry!", 
    storeGames: []
}

// const gamesURL = "http://localhost:3000/games"

export const gamesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "LOAD_GAMES":
            return {...state, storeGames: [...state.storeGames, action.payload]}
            
            default:
                return {...state}
                // case "GET_GAMES":
                //     return {...state, storeGames: [...state.storeGames, action.payload]}
                //     console.log(action.payload)
    }
}

// export const loadGames = () => async (dispatch, useState) => {
//     const games = await fetch(gamesURL)
//     .then(resp => resp.json())
//     dispatch(renderGames(games))
// }

export default gamesReducer