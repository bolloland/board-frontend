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

function App() {

  
  const getTheGames = useSelector(state => state.gamesReducer.storeGames)
  console.log(getTheGames)
  const dispatch = useDispatch()

  // as App loads, sudo DomContentLoad, says 
  useEffect(() => {
    dispatch(fetchGames()) 
  }, [])

  return (
    <div >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<GamesContainer games={getTheGames} />} />
        <Route exact path="/myCollection" element={ <MyCollection  />}  />
        {/* <Route exact path="/page2" element={ <Page2  />}  /> */}
      </Routes>
      <h1>HORDE the BOARD </h1>
      
      <SearchContainer />
      <Footer />
    </div>
  );
}

export default App;

