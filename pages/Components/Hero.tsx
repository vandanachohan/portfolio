import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

const Hero = () => {
  return (
    <section className=''>
      <h1 className='text-center justify-center text-pink-600 m-6 font-bold text-8xl'>Welcome to My Portfolio</h1>
      <div className='card-container'>
        <div className='card'>
          <div className='card-content'>
            <h4 className='heading'>About Me</h4>
            <p>I m Vandana Chohan, a passionate Front-End Developer and Web Developer from Pakistan. I have a keen eye for detail and a strong understanding of user experience.
            My goal is to create engaging and intuitive web experiences that meet the needs of my clients.</p>
          </div>
        </div>
        
        {/* About Image with width and height specified */}
        <div className='about-img'>
          <Image src="/v.logo (2).webp" alt="vandana chohan" width={400} height={400} />
        </div>
        
        {/* Education Section */}
        <section className='Education'>
          <h2 className="heading">Education</h2>
          <div className='time-line-items'>
            
            {/* Timeline Item 1 */}
            <div className="timeline-items">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2015
                <div className="timeline-content">
                  <h3>High School</h3>
                  <p>My school life was a learning experience for sure. In govt.high secondary, I enjoyed my 10 years.
                    It was the place where I acknowledged my individuality and uniqueness. School life is a blessing that has given me priceless joys in life.</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-items">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2017
                <div className="timeline-content">
                  <h3>College</h3>
                  <p>My college life taught me many things and built my confidence to face challenges and struggles in the future.
                    At govt.islamia colloge karachi, I enjoyed college life and participated in various activities beyond academics.</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-items">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024
                <div className="timeline-content">
                  <h3> karachi University (Ongoing)</h3>
                  <p>Your time is limited, so dont waste it living someone elses life.
                    Set a goal so big that you cant achieve it until you grow into the person who can.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </section>
  )
}

export default Hero;
