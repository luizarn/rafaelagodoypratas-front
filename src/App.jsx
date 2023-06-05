import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import { UserProvider } from './contexts/UserContext'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import StyleBranch from './components/StyleBranch'
import Home from './pages/Home'

function App() {

  return (
    <>
        <UserProvider>
       <BrowserRouter>
       <NavBar/>
       <Dashboard/>
       <StyleBranch/>
       <Routes>
      
        <Route path='/' exact element={<Home/>} />
        <Route path='/sign-in' exact element={<LoginPage/>} />
        <Route path='/sign-up' exact element={<SignUpPage/>} />
       
       </Routes>
       <Footer/>
       </BrowserRouter>
       </UserProvider>
    </>   
  )
}

export default App
