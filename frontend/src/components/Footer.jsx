import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*------------------  Left Section   ---------------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logoo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/*------------------  Center Section   ---------------*/}
           <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li><a href="/" className="hover:text-blue-500">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-500">About us</a></li>
                    <li><a href="/contact" className="hover:text-blue-500">Contact us</a></li>
                    <li><a href="/privacy-policy" className="hover:text-blue-500">Privacy Policy</a></li>
                </ul>
            </div>

            {/*------------------  Right Section   ---------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li> <a href="tel:+918480292655" className="text-blue-500 hover:underline">+91 8480292655</a></li>
                    <li><a href="mailto:spsahoo2003@gmail.com" className="text-blue-500 hover:underline">spsahoo2003@gmail.com</a></li>
                </ul>
            </div>
        </div>
        {/* ------------- Copy Text  --------------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
