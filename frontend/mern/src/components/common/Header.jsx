import React from 'react'
import Topbar_layout from '../layouts/Topbar_layout'
import Navbar from './Navbar'
const Header = () => {
  return (
      <header>
        { /*topbar */}
        <Topbar_layout/>
        { /*navbar */}
        <Navbar />

        { /*cartdrawer */}
    </header>
  )
}

export default Header