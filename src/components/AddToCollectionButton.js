import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCollection, removeFromCollection } from '../actions'

const AddToCollectionButton = ({gamedata}) => {

// const AddToCollectionButton = (props) => {
//     console.log(props.game)
//     let gamedata = props.game
    const dispatch = useDispatch()

    const myCollection = useSelector(state => state.gamesReducer.myCollection)
    let collected = myCollection.find(g => g.id === gamedata.id)

    return (
        <div className="add-to-collection-button">

        {!collected ? <button className="button" onClick={(event) => {
                event.preventDefault()
                dispatch(addToCollection(gamedata))}
                }>add to collection</button> : 
                <button className="button" onClick={(event) => {
                    event.preventDefault()
                    dispatch(removeFromCollection(gamedata))}
                }
                 >remove from collection</button>}
        </div>
    )
}

export default AddToCollectionButton
