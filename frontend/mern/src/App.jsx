import { useState } from 'react'

import {BrowserRouter,Route,Routes} from "react-router-dom"

import Header from './components/common/Header'
import Hero from './components/layouts/Hero'
import Page2_layout from './components/layouts/Page2_layout'
import Page3_layout from './components/layouts/Page3_layout'
import Page4_layout from './components/layouts/Page4_layout'



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

        </>
      }></Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
