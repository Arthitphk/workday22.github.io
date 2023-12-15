import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/ProductPage' element={<ProductPage/>}/>
    </Routes>
  )
}


function WrappedApp () {
  return (
    <BrowserRouter >
      <App/>
    </BrowserRouter>
  )
}

export default  WrappedApp 