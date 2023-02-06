import React from 'react'
import Contact from './Contact'
import "./Style.css"
import Testimunels from './Testimunels'
import { AiFillFacebook } from "react-icons/ai"
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa"

// import image from "../../../public/image/pf.jpeg"
const Home = () => {
  return (
    <div>
      <div className='div'>
        <div className='p-5'></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>


        <p className='heading1  text w-50 	col-xs-3 p-5 ps-5 pt-5'>
          WORLD NEEDS SPECIAL GIFT THAT ONLY YOU HAVE!
        </p>
      </div>
      <div className=' mt-5'>
        <div className=' m-3 p-3 shadow-lg company-name'>
          <div><h4 className='text-cc m-2 com-name d-flex'><span>FEATURED</span><span>  IN</span></h4></div>
          <div><h4 className='m-2 com-name d-felx'><span>FFSteel(Pvt)</span><span>Limited</span> </h4></div>
          <div><h4 className='m-2 com-name d-flex'><span>Al-Hafiz</span><span>Crystoplast(Pvt)Limited</span> </h4></div>
          <div><h4 className='m-2 com-name d-flex'><span> Ays</span><span>Electronics</span></h4></div>
        </div>
      </div>
      <div id="about" className='mt-5 shadow-lg p-3 mb-5 bg-white rounded  m-3'>
        <div className=' mt-5 '>
          <div className="cart-box">
            <img src="image/2.jpeg" alt='m image' className=' img ' />
            <div className="ms-3 w-50  ">

              <h1 className='' >
                Hi I am Muhammad Farhan Qureshi!
              </h1>
              <p className=' text-p '>I would like to express my strong interest in the Supply Chain department. As an Assistant Manager of Supply chain, having 3 years’ experience, would translate well into your organization. As a highly skilled and successful professional with comprehensive experience by coordinating supply chain operations, inventories, materials and Production planning
              </p>
              <div className='icon-box'>
                <AiFillFacebook className='   icon-1' />
                <FaInstagramSquare className="  icon-2" />
                <FaTwitterSquare className='   icon-3' />
                <a href='https://www.linkedin.m-2 com/in/muhammad-farhan-qureshi-3a81101b9/'>
                  <FaLinkedin className='   icon-4' />
                </a>
                <a href='https://wa.me/+923429813779'>
                  <FaWhatsappSquare className="  icon-5 " />
                </a>
              </div>
            </div>

            <div className='bx'>
              To work diligently in accordance with the true spirit of professionalism, for an organization that offers challenging tasks and opportunities for growth & career development.
            </div>
          </div>

        </div>



      </div>
      <Testimunels />
      <Contact />
    </div>




  )
}

export default Home