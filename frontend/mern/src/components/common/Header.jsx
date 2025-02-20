import React from 'react'
import Topbar_layout from '../layouts/Topbar_layout'
import Navbar from './Navbar'
const Header = () => {
  return (
      <header className="fixed top-0 left-0 w-full z-20">
        { /*topbar */}
        <Topbar_layout/>
        { /*navbar */}
        <Navbar />

        

    </header>
  )
}

export default Header