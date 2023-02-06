import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaWhatsappSquare } from "react-icons/fa"
import Contact from "../Home/Contact"
import MoreAbout from './MoreAbout'
import "./Style.css"
const About = () => {
  return (
    <div >
      <Helmet>
        <title>
          Farhan webside :About page
        </title>
      </Helmet>
      <div className='about-div d-flex flex-column  align-items-center  '>
        <div className='d-flex flex-column  text-box '>
          <h1><strong>HI I AM </strong></h1>
          <h1><strong>GRACE!</strong> </h1>
          <p className='ptag'>
            An entrepreneur, writer, counsellor & unshakable optimist dedicated to help you in achieving what you want in your life with dedication.
          </p>

        </div>

      </div>
      <div className='mt-5'></div>
      <div className='d-flex container mt-5 pt-5 cart-box '>
        <div className=' m-2'  >
          <img src='image/3.jpeg' alt='sertificate' className='img col-xs-3' />
          <h5 className='d-flex'>


            <FaWhatsappSquare className='icon-green mt-1  ' />

            +923424717112/+923429813779</h5>
        </div>
        <div className=' w-75' >
          <h1>Helping You Create
            a Life You Love!​</h1>
          <p className='text-p'>Fugiat pellentesque similique rhoncus sapien, blanditiis, nostrud porta curabitur sapiente optio repellendus te! Ex hendrerit suspendisse, cras aliquid corrupti consequuntur, varius modi elit etiam proin facilis illum dui. Cubilia interdum accusamus nesciunt voluptate officiis amet. Cubilia interdum accusamus nesciunt voluptate officiis amet
          </p>
          <div className=''>
            <button className='btn-1 '>START COACHING </button>
          </div>
        </div>

      </div>
      <MoreAbout />
      <Contact />
    </div>
  )
}

export default About