import { useState } from 'react'
import './App.css';
import Contato from './pages/Contato';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contato />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/carousel" element={<Home />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
