import React from 'react'

import img2 from '../../assets/Simply Whyte Design 1.png'
import hand from '../../assets/hand_house.png'
import ellipse from '../../assets/Ellipse 194.png'

const ResultDriven = () => {
  return (
    <div className='ml-12 mt-[50rem]' >
      <div className='font-gilroy text-[#FFFF00] text-xl my-10 '>
        RESULT-DRIVEN SOLUTIONS ---
      </div>
      <div className='block md:flex w-9/10'>
        <div className='w-1/2 mr-10'>
          <div className='font-gilroy text-3xl md:text-5xl font-semibold my-10 w-4/5 '>
            We learn, adapt & innovate
          </div>
          <div className='hidden md:block font-gilroy text-xl  text-justify my-10'>
          In today’s world, there is no defined solution. We are life-long learning experts with a strong focus on generating results and boosting brand trust. We are different because we believe in bringing new ideas to the table for every client. Our work is driven by a thorough research and understanding customized for each brand to unlock its own potential value.
          </div>
        </div>
        <div className='w-8/10 md:w-2/5'>
          <img className='w-4/5 md:w-full' src={img2} alt='globe' />
        </div>
      </div>

      <div className='mt-64'>
        <div className='font-gilroy text-3xl md:text-5xl font-semibold w-4/5 md:w-1/2'>
          We work anywhere & everywhere
        </div>
        <div className='hidden md:block my-10 font-gilroy text-xl w-1/2'>
          From A to Z, we work through a diverse array of e-commerce portals to deliver the best of media and marketing solutions for your brand
        </div>


      </div>


      <div className='my-40 md:flex'>
        <div className='w-full md:w-2/5' >
          <img className='bg-transparent absolute md:ml-8 mt-20 w-1/2 md:w-auto' src={hand} alt='hand'/>
          <img className='bg-transparent ml-16 md:ml-64' src={ellipse} alt='ellipse'/>
        </div>
        <div className='mt-40 md:mt-0 w-full md:w-1/2'>
          <div className='text-[#FFFFFF] font-semibold font-gilroy text-3xl md:text-5xl   '>
          Want campaigns on your own platform ?
          </div>
          <div className='block my-12 text-lg font-gilroy'>
          The brand is all about how your customers think about you. With our extensive experience in E-commerce marketing, grow your brand name from scratch.<br/> Kick-start your platform, Ignite the fire, sit back and watch Mad Monkey spread your light in the "Lanka" of budding entrepreneurship.          </div>

          <button className='my-10 px-10 py-3 bg-white rounded-lg text-[#000000] font-[500] text-xl'>
              Speak To Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultDriven