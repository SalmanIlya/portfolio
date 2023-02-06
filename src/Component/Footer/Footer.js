import React from 'react'
import { AiFillFacebook } from "react-icons/ai"
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa"
import "./Style.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <AiFillFacebook className='h1 m-1  icon-1' />
        <FaInstagramSquare className="h1 m-1  icon-2" />
        <FaTwitterSquare className='h1 m-1  icon-3' />
        <a href='https://www.linkedin.com/in/muhammad-farhan-qureshi-3a81101b9/'>
          <FaLinkedin className='h1 m-1  icon-4' />
        </a>
        <a href='https://wa.me/+923429813779' >
          <FaWhatsappSquare className="h1 m-1 icon-5 " />
        </a>
      </div>
      <hr className='container ' />
      <div className='box container'>
        <div>
          <h4>
            Companies name with I've worked for
          </h4>
          <p>FF Steel (Pvt) Limited</p>
          <p>Al-Hafiz Crystoplast (Pvt) Limited</p>
          <p>Ays Electronics</p>
        </div>
        <div >
          <h4>Contact</h4>
          <p>Plot No. 166, Road B-7, Hayatabad, Phase 1 Industrial Estate, Peshawar, Khyber Pakhtunkhwa</p>
          <p>mfqureshi077@gmail.com</p>
          <p>+923424717112 / +923429813779</p>
        </div>

      </div>
      <hr className='container' />

    </div>
  )
}

export default Footer