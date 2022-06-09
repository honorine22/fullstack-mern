import './App.css'
import NewPlace from './place/components/PlaceItem';
import PlaceItem from './place/components/PlaceList';
import Place from './place/components/PlaceList';
import Users from './user/pages/Users';

import { Routes, Route } from 'react-router-dom'
import Navbar from './shared/components/Navbar';
function App() {
  // bscf
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='places' element={<Place />} />
        </Routes>
      </div>
    </>
  )
}

export default App
