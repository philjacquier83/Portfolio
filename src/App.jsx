import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {  

  return (
    <>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </>
  )
}

export default App
