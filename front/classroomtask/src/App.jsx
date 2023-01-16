import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/home-page'
import Header from './layouts/header'
import { Route, Routes } from 'react-router-dom'
import Footer from './layouts/footer'
import AddProduct from './pages/add-products'
import Product from './pages/products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add-products' element={<AddProduct/>}/>
        <Route path='/add-products/:id' element={<Product/>}/>
      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App
 