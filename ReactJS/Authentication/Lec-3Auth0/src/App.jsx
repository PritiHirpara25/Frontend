import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function App() {
  
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
