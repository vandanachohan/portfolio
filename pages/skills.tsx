import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';

const Skills = () => {
  return (
    <section className="Skills" id="skills">
        <Header/>
         <h2 className="heading">Skills</h2>

      <div className="skill-container">
            <div className="skill-box">
                <div className="skill-info">
                    <h4>Typescript</h4>
                    <p>Thats My First Topic That i Learned In My Course And It a a Very Simple
                     Topic And Easy And Interesting Language</p>
                </div>
            </div>

            <div className="skill-box">
                <div className="skill-info">
                    <h4>Fronted Development</h4>
                    <p>I also Work An Fronted Development And i Enjoy My work With my colleagues And Sir
                     I Appreciate He Support Me Alot And Give Me Alot of Strength And Here I Am</p>
                </div>
            </div>

            <div className="skill-box">
                <div className="skill-info">
                    <h4>Backend Developer</h4>
                    <p>I also Work An Backend Development And i Enjoy My work With my colleagues And Sir
                    I Appreciate He Support Me Alot And Give Me Alot of Strength And Here I Am</p>
                </div>
            </div>

            <div className="skill-box">
                <div className="skill-info">
                    <h4>Web Developer</h4>
                    <p>I Also Work On web Developer That s why i Maked a Profeesional Portfolio Of Mine 
                    And Thats Not My Services That s My Work</p>
                </div>
            </div>
            
            
            <div className="skill-box">
                <div className="skill-info">
                    <h4>JavaScript</h4>
                    <p>I Also Know a Javscript and work on JavaScript
                     That s a difficult Topic to Cover But i Reached To My Target that s My Work</p>
                </div>
            </div>

            <div className="skill-box">
                <div className="skill-info">
                    <h4>HTML And CSS </h4>
                    <p>I Also Work On HTML And CSS I Know The Stylish Thing to Make A Perfect look
                    That s My Work</p>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Skills