import './App.css';
import GamesContainer from './components/GamesContainer'
import { useSelector, useDispatch } from 'react-redux'
// import { getGames } from './actions'
import { useEffect } from 'react'
import Navbar from './components/Navbar';
import { useNavigate, Routes, Route } from 'react-router'
import SearchContainer from './components/SearchContainer'
import Footer from './components/Footer'
import { fetchGames } from './actions';
import MyCollection from './components/MyCollection';
import AddGame from './components/AddGame';
import ShowGame from './components/ShowGame';

function App() {

  // const getTheGames = useSelector(state => state.gamesReducer.storeGames)
  // console.log(getTheGames, "getting the Games")
  const dispatch = useDispatch()

  // as App loads, sudo DomContentLoad, says 
  useEffect(() => {
    dispatch(fetchGames()) 
  }, [])

  return (
    <div >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<GamesContainer />} />
        <Route exact path="/myCollection" element={ <MyCollection  />}  />
        <Route exact path="/add-game" element={ <AddGame />}  />
        <Route exact path="/games/:id" element={ <ShowGame />}  />
        <Route exact path="/search" element={ <SearchContainer />}  />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

