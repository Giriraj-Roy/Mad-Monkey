import React from 'react'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'

const Footer = () => {
  return (
    <>
      <div className='bg-[#FFFFFF] flex w-full aspect-[3.5/1] text-black'>
        <div className='md:mx-auto mt-1 md:mt-24 hidden md:block bg-transparent'>
          <span className=' bg-transparent font-junkdog text-xl md:text-5xl text-[#FF6E1A]'>MAD MONKEY</span>
          <br/><br/>
          <span className=' bg-transparent font-gilroy font-semibold text-sm md:text-2xl text-[#E63946] '>India’s Leading Product Marketing Agency</span>
        </div>
        <div className='mx-2 md:mx-auto mt-1 md:mt-24 block bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-sm md:text-2xl text-[#E63946] '>Navigation</span>
          <br className='hidden md:block'/>
          <br className='hidden md:block'/>
          <div className='font-gilroy bg-transparent'>
            <ul className='bg-transparent '>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>Home</li>
              <br className='hidden md:block'/>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>About Us</li>
              <br className='hidden md:block'/>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>Case Studies</li>
              <br className='hidden md:block'/>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>Contact Us</li>

            </ul>
          </div>
        </div>
        <div className='mx-2 md:mx-auto mt-1 md:mt-24 bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-sm md:text-2xl text-[#E63946] '>Reach Us</span>
          <br className='hidden md:block'/>
          <br className='hidden md:block'/>
          <div className='font-gilroy bg-transparent'>
            <ul className='bg-transparent '>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>+91 123456789</li>
              <br className='hidden md:block'/>
              <li className='bg-transparent text-[#0D0D0D] text-xs md:text-xl font-semibold'>hey@gmail.com</li>
              <br className='hidden md:block'/>
            </ul>
          </div>
        </div>
        <div className='mx-2 md:mx-auto mt-1 md:mt-24 bg-transparent'>
          <span className='bg-transparent font-gilroy font-extrabold text-sm md:text-2xl text-[#E63946] '>Connect With Us</span>
          <br className='hidden md:block'/>
          <br className='hidden md:block'/>
          <div className='bg-transparent flex'>
            <img className='bg-transparent' src={linkedin} alt='linkedin'/>
            <img className='bg-transparent' src={insta} alt='insta'/>
            <img className='bg-transparent' src={facebook} alt='facebook'/>

          </div>

        </div>
      </div>

        <div className='w-full  md:h-[50px] flex justify-center bg-[#28D596] ' >
            <div className='mt-2 bg-transparent  text-black text-sm md:text-2xl font-gilroy font-semibold '>
              Designed & built with passion in India 🚀
            </div>
        </div>

    </>
  )
}

export default Footer