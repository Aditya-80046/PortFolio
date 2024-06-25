import React from 'react'
import { FaGithub,FaVoicemail,FaLinkedin   } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="container contact" id="Contact"data-aos="zoom-in" data-aos-duration="1000">
        <h1>
          Contact Me
        </h1>
        <div className="contact-icon">
          <a href="" target="_blank" className="items" data-aos="fade-right" data-aos-duration="500"><FaGithub className="icons"/></a>
          <a href="mailto:srv.aditya2985@gmail.com" target="_blank" className="items" data-aos="fade-up" data-aos-duration="500"><FaVoicemail className="icons" /></a>
          <a href="" target="_blank" className="items" data-aos="fade-left" data-aos-duration="500"><FaLinkedin className="icons" /></a>
        </div>
      </div>
    </>
  )
}

export default Contact
