import './App.css';
import GamesContainer from './components/GamesContainer'
import { useSelector, useDispatch } from 'react-redux'
// import { getGames } from './actions'
import { useEffect } from 'react'
import Navbar from './components/Navbar';
import SearchContainer from './components/SearchContainer'
import Footer from './components/Footer'
// import loadGames from './reducers/gamesReducer'

function App() {

  const hello = useSelector(state => state.gamesReducer.hello)
  console.log(hello)
  
  const getTheGames = useSelector(state => state.gamesReducer)
  console.log(getTheGames)
  
  const dispatch = useDispatch()
  const gamesURL = "http://localhost:3000/games"
  console.log(gamesURL)

  // const fetchGames = () => {
  //  dispatch(getGames)
  // }
  // useEffect(() => {
  //   fetchGames()
  // }, [fetchGames])

  useEffect(() => {

  }, [getTheGames])


  return (
    <div className="App">
      <Navbar />
      <h1>HORDE the BOARD </h1>
      <GamesContainer props={getTheGames} />
      <SearchContainer />
      <Footer />
    </div>
  );
}

export default App;
