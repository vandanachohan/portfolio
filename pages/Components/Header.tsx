import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <span><h3><b>Vandana Chohan</b></h3></span>
    <nav className='navbar'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/project">Projects</a>
        <a href="/contact">Contact</a>
    </nav>
    </header>
  )
}

export default Header