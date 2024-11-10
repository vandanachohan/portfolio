import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="projects">
      <Header />
      <div className="project-box">
        <h2 className="heading">Projects</h2>
        <div className="wrapper">
          <div className="Project-items">
            <Image
              src="/countdown.gif"
              alt="Countdown Timer"
              width={500}  // Specify the appropriate width
              height={300} // Specify the appropriate height
            />
            <h2>Countdown Timer</h2>
            <p>This is a simple countdown timer using Next.js, CSS, and TypeScript. You can customize the countdown time by changing the values in the script tag.</p>
          </div>

          <div className="Project-items">
            <Image
              src="/weathr.jpg"
              alt="Weather Widget"
              width={500}  // Specify the appropriate width
              height={300} // Specify the appropriate height
            />
            <h2>Weather Widget</h2>
            <p>This is a weather app using Next.js, CSS, and JavaScript. You can enter your city name to see the current weather and forecast.</p>
          </div>

          <div className="Project-items">
            <Image
              src="/todo-list1.PNG"
              alt="Todo-List"
              width={500}  // Specify the appropriate width
              height={300} // Specify the appropriate height
            />
            <h2>Todo-List</h2>
            <p>This is a Todo-List app using Next.js, CSS, and TypeScript. You can enter your todo-list to see when your list is.</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Projects;
