import { useState } from 'react'
import './App.css'
import Menu from './menu'
import Home from './pages/Home'
import Support from './pages/Support'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App
