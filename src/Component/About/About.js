import React from 'react'
import {FaWhatsappSquare} from "react-icons/fa"
import Contact from "../Home/Contact"
import MoreAbout from './MoreAbout'
import "./Style.css"
const About = () => {
  return (
    <div >
      <div className='about-div'>

      <div></div>
<div className='d-flex flex-column text-box '>
  <h1><strong>HI I AM </strong></h1>
<h1><strong>GRACE!</strong> </h1>
<p className='ptag'>
An entrepreneur, writer, counsellor & unshakable optimist dedicated to help you in achieving what you want in your life with dedication.
</p>

</div>
</div>
<div className='mt-5'></div>
<div className='d-flex flex-row container  '>
  <div className='w-50 m-5 p-5' >
    <h1>Helping You Create
a Life You Love!​</h1>
<p className='fs-5'>Fugiat pellentesque similique rhoncus sapien, blanditiis, nostrud porta curabitur sapiente optio repellendus te! Ex hendrerit suspendisse, cras aliquid corrupti consequuntur, varius modi elit etiam proin facilis illum dui. Cubilia interdum accusamus nesciunt voluptate officiis amet. Cubilia interdum accusamus nesciunt voluptate officiis amet
</p>
<div className=''>
<button className='btn-1 '>START COACHING </button>

</div>
  </div>
  <div className=' m-5 p-5'  ><img src='image/3.jpeg' alt='sertificate' className='w-75 h-75 '/>
  <h3 className='m-2 mt-5 d-flex'>
    <h1 className=''>

  <FaWhatsappSquare className='icon-green mb-4  '/>
    </h1>
  +923424717112/+923429813779</h3>
  </div>
</div>
<MoreAbout/>
<Contact/>
    </div>
  )
}

export default About