import { LOAD_GAMES, ADD_COLLECT } from "../actions/types"

const INITIAL_STATE = {
    storeGames: [],
    myCollection: []
}

// const gamesURL = "http://localhost:3000/games"

export const gamesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_GAMES:
            return {...state, storeGames: [...state.storeGames, action.payload]}
        case ADD_COLLECT:
            console.log(action.payload)
            return {...state, myCollection: [...state.myCollection, action.payload]}
        default:
            return {...state}
              
    }
}



export default gamesReducer