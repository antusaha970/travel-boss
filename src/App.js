import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SinglePlaceDetails from './components/SinlgePlaceDetails/SinglePlaceDetails';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Hotels from './components/Hotels/Hotels';

export const PlaceContext = createContext();
export const UserContext = createContext();

function App() {
  const [currentPlace, setCurrentPlace] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  return (
    <PlaceContext.Provider value={[currentPlace, setCurrentPlace]}>
      <UserContext.Provider value={[user, setUser,isLoggedIn, setIsLoggedIn]}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/booking/:id' element={<SinglePlaceDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/hotels' element= {<Hotels />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </UserContext.Provider>
    </PlaceContext.Provider>
  );
}

export default App;