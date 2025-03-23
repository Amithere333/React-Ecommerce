import Home from './Pages/Home'
import React from 'react'
import Product from './Pages/ProductsPage'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
    </Router>

  )
}

export default App