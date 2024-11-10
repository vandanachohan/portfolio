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

// Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/skills" passHref>
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/project" passHref>
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
