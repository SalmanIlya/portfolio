import React from 'react'
import {GoPerson} from "react-icons/go"
import {MdModeEdit,MdBusinessCenter} from "react-icons/md"
import "./Style.css"
const Testimunels = () => {
    const Data=[
        {
            id:1,
            icon:<GoPerson className='icons'/>,
            heading:"Analytical Thinking",
            pragraf:"Deals with the ability to assess a situation, seek multiple perspectives, gather more information if necessary, and identify key issues that need to be addressed"
            
        },
        {
            id:2,
            icon:<MdModeEdit className='icons'/>,
            heading:"Flexibility and Adoptability",
            pragraf:"Deals with the ability to manage multiple assignments and tasks, set priorities, and adapt to changing conditions and work assignments"
        },
        {
            id:3,
            icon:<MdBusinessCenter className='icons'/>,
            heading:"Computer Literacy",
            pragraf:"Have understanding of computer software, especially word processing, spread sheets, SAP ERP, and emailing"
        },
        {
            id:4,
            icon:<MdBusinessCenter className='icons'/>,
            heading:"Accounting & Bookkeeping",
            pragraf:"Have a professional skill of Book keeping and accounting transaction records."
        },
    ]
  return (
    <div>
        <div className='t-box shadow-lg m-3 '>
<div className='text-center p-3'>
    <h1 className='h1'>
    Creative Problem Solving
    </h1>
</div>
<div className='tst-box '>
    {
        Data.map((item)=>{
            return(
                <div key={item.id} className="m-5 w-25">
<h3>{item.heading}</h3>
<p>{item.pragraf}</p>
                    </div>
            )
        })
    }
</div>
        </div>
    </div>
  )
}

export default Testimunels