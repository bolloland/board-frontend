import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Game from './Game'

const MyCollection = (props) => {
// taking in the myCollection array from state
    const dispatch = useDispatch()
    const collection = useSelector(state => state.gamesReducer.myCollection)
    console.log(collection)

    return (
        <div>
           <h2> MY COLLECTION! </h2>
           {collection && collection.map(game => <Game gamedata={game}/>)}
        </div>
    )
}

export default MyCollection
