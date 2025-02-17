import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import User_layout from './components/layouts/User_layout'
import Admin_layout from './components/layouts/Admin_layout'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User_layout/>}></Route>
      <Route path='/admin' element={<Admin_layout/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
