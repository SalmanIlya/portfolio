import React, { useRef } from 'react'
import {FaLocationArrow} from "react-icons/fa"
import {AiTwotonePhone} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import Contactitem from "../Home/Contact"
import "./Style.css"
import Ifram from './Ifram'
import emailjs from '@emailjs/browser';
const Contact = () => {
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_f475nte', 'template_ssgrkle', form.current, 'KFEGlUCpi_F8XNN7f')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div>

    <div  className='shadow-lg p-3 mb-5 bg-white rounded  contact-box'>
      <h1 className='text-center m-5 p-3 contact-color'><strong>Contact us </strong></h1>
<section className="mb-4 container">

  
    <div className="row " >
        <div className="col-md-9 mb-md-0 mb-5 p-5 ">
           
        <form ref={form} onSubmit={sendEmail}>
            <div className='d-flex flex-column'>
            <label className='text-light fs-5'>Name</label>
      <input type="text" name="name"   className='input'/>
            </div>
    <div className='d-flex flex-column'>
    <label className='text-light fs-5'>Email</label>
      <input type="email" name="email"  className='input' />
    </div>
   <div className='d-flex flex-column'>
   <label className='text-light fs-5'>Message</label>
      <textarea name="message" className='fs-4'  rows={5}  />
   </div>
    

      <input type="submit" value="Send" className='btn'  />
    </form>
            <div className="text-center text-md-left">
            </div>
            <div className="status"></div>
        </div>

        <div className="col-md-3 text-center mt-5 pt-5">
            <ul className="list-unstyled mb-0">
                <li><FaLocationArrow className='h3 icons'/>
                    <p className='contact-color fs-5'>Plot No. 166, Road B-7, Hayatabad, Phase 1 Industrial Estate, Peshawar, Khyber Pakhtunkhwa</p>
                </li>
                <li><AiTwotonePhone className='h3 icons contact-color'/>
                    <p className='contact-color fs-5'>+923424717112</p>
                </li>

                <li><MdEmail className='h3 icons contact-color'/>
                    <p className='contact-color fs-5'> mfqureshi077@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>

    </div>
  <Ifram/>
    <Contactitem/>

    </div>

  )
}

export default Contact