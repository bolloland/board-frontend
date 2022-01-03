import './App.css';
import GamesContainer from './components/GamesContainer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Navbar from './components/Navbar';
import { useNavigate, Routes, Route } from 'react-router'
import SearchContainer from './components/SearchContainer'
import { fetchGames } from './actions';
import MyCollection from './components/MyCollection';
import AddGame from './components/AddGame';
import ShowGame from './components/ShowGame';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGames()) 
  }, [])
  
  // as App loads, similar to DomContentLoad, says:
  //empty dependency array keeps from refresh looping

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
      
    </div>
  );
}

export default App;

