import { useState } from 'react'
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes,Link, Route} from  "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import AboutMe from './pages/Aboutme'
import Passwordgen from './components/passwordgenerater';
function App() {
   
  return (
    <div className='App'>
    {/* <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/AboutMe' element={<AboutMe/>}/>
      </Routes>
    </Router> */}
     <Passwordgen/>

    </div>
  )
}

export default App
