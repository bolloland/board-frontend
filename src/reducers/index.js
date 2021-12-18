import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
// import all individual reducers below:


// combineReducers is a redux method that combines all reducers for export and 
// allows you to rename the main reducer that handles multiple cases.

// allReducers are imported to the MAIN index.js file and added as the 1st argument to the createStore method. 
const allReducers = combineReducers({
    gamesReducer: gamesReducer
})

export default allReducers