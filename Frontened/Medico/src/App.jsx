import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import { ProductCard } from './components/ProductCard';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <div>
        <Navbar />
        <ProductCard />

        <Routes>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        </Routes>
      </div>
  )
}

export default App
