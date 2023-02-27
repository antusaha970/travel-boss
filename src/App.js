import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SinglePlaceDetails from './components/SinlgePlaceDetails/SinglePlaceDetails';
import { createContext, useState } from 'react';

export const PlaceContext = createContext();

function App() {
  const [currentPlace, setCurrentPlace] = useState([]);



  return (
    <PlaceContext.Provider value={[currentPlace, setCurrentPlace]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/booking/:id' element={<SinglePlaceDetails />} />
      </Routes>
    </PlaceContext.Provider>
  );
}

export default App;