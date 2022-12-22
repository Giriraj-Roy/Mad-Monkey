import React from 'react'

import img1 from '../../assets/editorial illustrations 1.png'
import img2a from '../../assets/Explainer animation 2_prev_ui 1.png'
import img2b from '../../assets/Explainer animation 3_prev_ui 1.png'
import img2c from '../../assets/Explainer animation 4_prev_ui 1.png'
import img3 from '../../assets/download (15) 1.png'

const Process = () => {
  return (
  <div className='my-72 '>
    <div className='ml-12 '>
      <div className='font-gilroy text-[#FFFF00] text-xl my-10' >
        KEY PROCESS ---
      </div>
      <div className='font-gilroy text-3xl md:text-5xl font-semibold my-10 w-4/5 md:w-1/2'>
        We believe in Design Thinking
      </div>
      <div className='flex relative font-gilroy justify-around z-40 bg-transparent'>
        <div className='bg-transparent' >
          <div className='text-2xl w-fit font-[400] border-b-[6px] rounded border-[#FFFF00] '>
            01.
          </div>
          <div className='mt-8 text-3xl font-[700] '>
            Research
          </div>
          <div className='my-4 text-xl font-[500] w-9/10'>
          To understand your marketing needs, we study your business and come up with a tailored solution.
          </div>
          <div className='py-16 w-[90%] bg-[#F6BD60] rounded-3xl '>
                <img className='bg-transparent' src={img1} alt="man"/>
          </div>
        </div>
        <div className='bg-transparent'>
          <div className='text-2xl w-fit font-[400] border-b-[6px] rounded border-[#FFFF00] '>
            02.
          </div>
          <div className='mt-8 text-3xl font-[700] '>
            Strategy
          </div>
          <div className='my-4 text-xl font-[500] w-9/10'>
            The possible solutions are then churned with a cup of coffee into strategizing for the best possible outcome.
          </div>
          <div className='w-[91%]  bg-[#D8807C] rounded-3xl'>
            <div className='bg-transparent flex' >
              <img className='pt-5 bg-transparent' src={img2b} alt="laptop"/>
              <img className='bg-transparent rounded-3xl' src={img2c} alt="laptop"/>
            </div>
            <img className='mt-6 bg-transparent' src={img2a} alt="laptop"/>
          </div>
        </div>
        <div className='bg-transparent'>
          <div className='text-2xl w-fit font-[400] border-b-[6px] rounded border-[#FFFF00] '>
            03.
          </div>
          <div className='mt-8 text-3xl font-[700] '>
            Execution
          </div>
          <div className='my-4 text-xl font-[500] w-9/10'>
          Our highly skilled and determined team then put their heart and soul to execute these strategies.
          </div>
          <div className='pt-24 w-[95%] bg-[#5ED0E7] rounded-3xl '>
            <img className='mt-2 bg-transparent' src={img3} alt='man2'/>
          </div>
        </div>


      </div>

    </div>
    <div className='bg-[#F4F3EE] block absolute top-[165rem] z-[0] text-center pt-64 w-full font-gilroy font-600'>
        <div className='my-4 bg-transparent text-[#0D0D0D] text-base   '>
          WHAT DO YOU NEED TO GET YOUR BUSINESS MOVING?
        </div>
        <div className='bg-transparent text-[#0D0D0D] text-[3.75rem] '>
          Join the Mad Monkey bandwagon and solidify your brand in this concrete jungle now!
        </div>
        <button className='my-12 px-10 py-4 text-2xl rounded-xl bg-[#0D0D0D]'>
          Speak to us 
        </button>
    </div>

  </div>
  )
}

export default Process