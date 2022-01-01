import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCollection } from '../actions'

const AddToCollectionButton = ({gamedata}) => {

    const dispatch = useDispatch()

    const myCollection = useSelector(state => state.gamesReducer.myCollection)
    let collected = myCollection.find(g => g.id === gamedata.id)

    return (
        <div className="add-to-collection-button">

        {!collected ? <button className="button" onClick={() => dispatch(addToCollection(gamedata))}>add to collection (new)</button> : <button className="button" >in your collection</button>}
        
        </div>
    )
}

export default AddToCollectionButton
