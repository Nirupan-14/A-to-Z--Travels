import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const email = 'mosesnirupan@gmail.com';
const phoneNumber = '+94773706824';


const Footer = () => {
  return (
    <div className='md:pt-10 pt-6'>
    <div className=' flex justify-center bg-red pt-4  bg-[#638889] '>
     
  <div className='flex justift-between gap-4  pt-1 pb-4   '>
  <a href='https://web.facebook.com/people/Kumuna-Safari/100085533923355/?mibextid=ZbWKwL'>
  <FaSquareFacebook className='border border-gray-400 w-8 h-6 lg:w-12 lg:h-10 rounded  shadow-md shadow-orange-400 fill-current hover:bg-gradient-to-r from-orange-400 to-pink-600' /> 
  </a>
  <a href='https://www.instagram.com/kumuna_safari?igsh=ZGUzMzM3NWJiOQ=='>
  <FaSquareInstagram className='border border-gray-400 w-8 h-6 lg:w-12 lg:h-10 rounded  shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
  </a>
  <a href={`https://wa.me/${phoneNumber}`} target='_blank' rel='noopener noreferrer'>
  <FaWhatsapp className='border border-gray-400 w-8 h-6 lg:w-12 lg:h-10 rounded  shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600'/>
  </a>
  <a href='https://maps.app.goo.gl/sZquw1GYvKmDXGpE9'>
  <FaLocationDot className='border border-gray-400 w-8 h-6 md:w-12 md:h-10 md:pt-1 md:pb-1 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
  </a>
  </div>
    </div>
    </div>
  )
}

export default Footer