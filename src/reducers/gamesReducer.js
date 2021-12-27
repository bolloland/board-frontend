import { LOAD_GAMES, ADD_COLLECT, SUBMIT_NEW_GAME, SHOW_HIDE_REVIEW_FORM } from "../actions/types"

const INITIAL_STATE = {
    storeGames: [],
    myCollection: [],
    showHideReviews: [false]
}

// const gamesURL = "http://localhost:3000/games"
// BLOG POST!!   LoadGames vs. SubmitNewGame
//redux version of "push"

export const gamesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_GAMES:
            return {...state, storeGames: action.payload}
        case ADD_COLLECT:
            return {...state, myCollection: [...state.myCollection, action.payload]}
        case SUBMIT_NEW_GAME:
            return {...state, storeGames: [...state.storeGames, action.payload]}
        case SHOW_HIDE_REVIEW_FORM:
            return {...state, showHideReviews: [...state.showHideReviews, action.payload]}
        default:
            return {...state}      
    }
}

export default gamesReducer