import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Image from 'next/image';

const About = () => {
  return (
    <section className="home">
      <Header />
      <div className="home-content">
        <h1><b>Hi, <span>It s vandana</span></b></h1>
        <h3 className="text-animation"> I m a <span></span></h3>
        <p><b>A Passionate Web Developer With a Strong Foundation in HTML, CSS, and TypeScript. I Want to be a Full-Stack Developer</b></p>
      </div>
  
            {/* Responsive Background Image */}
      
      <div className="home-img">
        <Image
          src="/profile-picture.jpg"
          alt="profile Image"
          width={400}  // Replace with actual width of the image
          height={600} // Replace with actual height of the image
        />
      </div> 
    
    



      <Footer />
    </section>
  );
}

export default About;
