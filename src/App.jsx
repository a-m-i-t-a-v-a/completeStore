import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Register from './components/Register'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Profile from './components/Profile'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/products' element={<ProductList/>}/>
            <Route path='/product/:id' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
