// import React from 'react'

// const Header = () => {
//   return (
//     <header className="header">
//     <span><h3><b>Vandana Chohan</b></h3></span>
//     <nav className='navbar'>
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/skills">Skills</a>
//         <a href="/project">Projects</a>
//         <a href="/contact">Contact</a>
//     </nav>
//     </header>
//   )
// }

// export default Header


import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <span><h3><b>Vandana Chohan</b></h3></span>
      <nav className="navbar">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/project">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
