import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Game from './Game'
import Empty from './Empty'

const MyCollection = (props) => {

    const dispatch = useDispatch()
    const collection = useSelector(state => state.gamesReducer.myCollection)
    const empty = collection.length == 0

    return (
        <div >
           <div className='collection-title'> MY COLLECTION! </div>
           {/* <div className="collection-container">{collection && collection.map(game => <Game gamedata={game}/>)}</div> */}
           <div className="collection-container">{empty? <Empty /> : collection && collection.map(game => <Game gamedata={game}/>)}</div>
        </div>
    )
}

export default MyCollection
