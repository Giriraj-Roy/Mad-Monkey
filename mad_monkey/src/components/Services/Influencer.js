import React from 'react'
import img from '../../assets/Services/Group (1).png'


const Influencer = () => {
  return (
    <div className='my-32 block md:flex font-gilroy text-justify'>
      <div className='block md:hidden my-16 md:my-0 mx-16 md:mx-16 w-[70%] md:w-9/10 md:w-2/5'>
        <img className='w-full' src={img} alt="customer"/>
      </div>
      <div className='mx-16 md:mx-0 py-8 md:py-10 w-[70%] md:w-3/5 bg-[#4C40F7] rounded-3xl md:rounded-r-[3rem] md:rounded-l-none'>
        <div className='mx-10 md:mx-0  md:ml-[24rem] my-16 bg-transparent text-white text-4xl font-[700] '>
        Influencer Marketing
        </div>
        <div className='hidden md:block mx-16 pb-20 bg-transparent text-white text-2xl font-[500]'>
        Influencer Marketing is the new big thing. We at Mad Monkey enable your brand to collaborate with different micro and macro influencers. Through them, you can reach out to different target audiences so far as to start a new social media trend of your own! With our influencer community establish your own tribe today.
        </div>

      </div>

      <div className='hidden md:block my-16 md:my-0 mx-16 md:mx-16 w-[70%] md:w-9/10 md:w-2/5'>
        <img className='w-full' src={img} alt="customer"/>
      </div>
    </div>
  )
}

export default Influencer