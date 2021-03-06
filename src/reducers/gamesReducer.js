import { LOAD_GAMES, ADD_COLLECT, SUBMIT_NEW_GAME, SHOW_HIDE_REVIEW_FORM, REMOVE_FROM_COLLECT, GET_ONE_GAME, UNSET_ONE_GAME, SHOW_SEARCH_BUTTON, HIDE_SEARCH_BUTTON} from "../actions/types"
import { SUBMIT_NEW_REVIEW, LOAD_REVIEWS } from "../actions/types"

const INITIAL_STATE = {
    storeGames: [],
    myCollection: [],
    showHideReviews: [false],
    gameReviews: [],
    oneGame: null,
    showSearchButton: true
}

export const gamesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_GAMES:
            return {...state, storeGames: action.payload}
        case ADD_COLLECT:
            return {...state, myCollection: [...state.myCollection, action.payload]}
        case REMOVE_FROM_COLLECT:
            return {...state, myCollection: state.myCollection.filter(item => action.payload !== item)}
        case SUBMIT_NEW_GAME:
            console.log(action.payload, "submitted new game")
            action.payload.reviews = []
            console.log(action.payload, "reviews added?")
            return {...state, storeGames: [ ...state.storeGames, action.payload]}
        case SHOW_HIDE_REVIEW_FORM:
            return {...state, showHideReviews: [...state.showHideReviews, action.payload]}
        case SUBMIT_NEW_REVIEW:
            let game = state.storeGames.find(g => g.id === action.payload.game_id)
            game.reviews.push(action.payload)
            return {
                ...state, 
                storeGames: [...state.storeGames, game]
            }
        case GET_ONE_GAME:
            return {...state, oneGame: action.payload}
        case UNSET_ONE_GAME:
            return {...state, oneGame: null }
        case SHOW_SEARCH_BUTTON:
            return {...state, showSearchButton: true }
        case HIDE_SEARCH_BUTTON:
            return {...state, showSearchButton: false }
        default:
            return {...state}      
    }
}

export default gamesReducer