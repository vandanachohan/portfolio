import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Header/>
        <h2 className="heading">Contact <span>Me</span></h2>

        <form action="">
            <div className="input-group">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" required></input>
                    <input type="email" placeholder="Email"></input>
                </div>

                <div className="input-box">
                <input type="number" placeholder="Phone Number"></input>
                <input type="text" placeholder="Subject"></input>
               </div>
            </div>

            <div className="input-group-2">
                <textarea rows={10} cols={20} placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" className="btn"></input>
            </div>       
          </form> 
          <Footer/>
        </section>
  )
}

export default Contact