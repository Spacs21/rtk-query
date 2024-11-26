import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Header from './components/header/Header'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/students' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
