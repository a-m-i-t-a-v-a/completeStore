import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import OTPPage from './pages/OTPPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/otp' element={<OTPPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
