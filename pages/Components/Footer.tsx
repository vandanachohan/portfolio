import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-[45rem] text-cyan-50">
      <ul className="list">
            <li>
                <a href="#contact">FAQ</a>
            </li>

            <li>
                <a href="#about">About Me</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>

            <li>
                <a href="#project">Projects</a>
            </li>
         </ul> 

         <p className="copyright"> 
            © 2024 My Portfolio. All rights reserved.
         </p>
    </footer>
  )
}

export default Footer