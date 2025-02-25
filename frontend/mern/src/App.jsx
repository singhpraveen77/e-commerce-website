import { useState } from 'react'

import {BrowserRouter,Route,Routes} from "react-router-dom"

import Header from './components/common/Header'
import Hero from './components/layouts/Hero'
import Page2_layout from './components/layouts/Page2_layout'
import Page3_layout from './components/layouts/Page3_layout'
import Page4_layout from './components/layouts/Page4_layout'
import Page5_layout from './components/layouts/Page5_layout'
import Page6_layout from './components/layouts/Page6_layout'
import Footer from './components/common/Footer'
import Login from './components/layouts/Login'
import Create from './components/layouts/Create'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <>
          <Header />
          <Hero />
          <Page2_layout />
          <Page3_layout />
          <Page4_layout />
          <Page5_layout />
          <Page6_layout />
          <Footer />

        </>
      }></Route>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/register' element={<Create/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
