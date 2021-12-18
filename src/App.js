import './App.css';
import GamesContainer from './components/GamesContainer'
import { useSelector, useDispatch } from 'react-redux'
import { getGames } from './actions'
import { useEffect } from 'react'
import Navbar from './components/Navbar';
import SearchContainer from './components/SearchContainer'
import Footer from './components/Footer'
import loadGames from './reducers/gamesReducer'

function App() {

  const hello = useSelector(state => state.gamesReducer.hello)
  console.log(hello)
  const dispatch = useDispatch()
  const getTheGames = useSelector(state => state.gamesReducer.storeGames)
  console.log(getTheGames)

  // const gamesURL = "http://localhost:3000/games"

  const fetchGames = () => {
   dispatch(getGames)
  }
  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  useEffect(() => {
    console.log(getTheGames)
  }, [getTheGames])

  // const onLoad = () => {
  //   dispatch(loadGames())
  // }

  return (
    <div className="App">
      <Navbar />
      <h1>HORDE the BOARD </h1>
      {/* <button onClick={ onLoad }>LOAD GAMES</button> */}
      <GamesContainer/>
      <SearchContainer />
      <Footer />
    </div>
  );
}

export default App;
