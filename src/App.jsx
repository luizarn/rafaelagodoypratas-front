import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import LoginPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import { UserProvider } from './contexts/UserContext'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import StyleBranch from './components/StyleBranch'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <LayoutRoute />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

function LayoutRoute() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && (
        <>
          <NavBar />
          <Dashboard />
          <StyleBranch />
        </>
      )}
    </>
  );
}

export default App
