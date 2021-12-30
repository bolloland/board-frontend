import { LOAD_GAMES, ADD_COLLECT, SUBMIT_NEW_GAME, SHOW_HIDE_REVIEW_FORM } from "../actions/types"
import { SUBMIT_NEW_REVIEW, LOAD_REVIEWS } from "../actions/types"

const INITIAL_STATE = {
    storeGames: [],
    myCollection: [],
    showHideReviews: [false],
    gameReviews: []
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
        case SUBMIT_NEW_REVIEW:
            let game = state.storeGames.find(g => g.id === action.payload.game_id)
            game.reviews.push(action.payload)
            return {
                ...state, 
                storeGames: [...state.storeGames], game
            }
        default:
            return {...state}      
    }
}

export default gamesReducer