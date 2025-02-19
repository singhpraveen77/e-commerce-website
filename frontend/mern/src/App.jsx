import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import User_layout from './components/layouts/User_layout'
import Admin_layout from './components/layouts/Admin_layout'
import Topbar_layout from './components/layouts/Topbar_layout'
import Header from './components/common/Header'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route path='/admin' element={<Header/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
