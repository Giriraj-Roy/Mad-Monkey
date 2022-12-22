import React from 'react'
import img from '../../assets/Services/Group (3).png'


const SocialMedia = () => {
  return (
    <div className='my-32 block md:flex font-gilroy '>
      <div className='block md:hidden my-16 md:my-0 mx-16 md:mx-16 w-[70%] md:w-9/10 md:w-2/5'>
        <img className='w-full' src={img} alt="customer"/>
      </div>
      <div className='mx-16 md:mx-0 md:mr-16 py-8 md:py-10 w-[70%] md:w-3/5 bg-[#00916E] rounded-3xl md:rounded-r-[3rem] md:rounded-l-none text-justify  '>
        <div className='mx-10 md:mx-0 md:ml-[20rem] my-16 w-fit bg-transparent text-white text-4xl  font-[700]  '>
        Social Media Marketing
        </div>
        <div className='hidden md:block mx-16 pb-20 bg-transparent text-white text-2xl font-[500] '>
        customer reviews are an integral part of your brand. It builds trust, increases traffic and enhances sales. We have a host of product review solutions if you are a brand who needs to make a mark in the industry. Starting from brands who need footfall, to new brands looking to make an impact, we customize product review services across diverse e-commerce platforms to help your brand leave a mark.
        </div>

      </div>
      <div className='hidden md:block my-16 md:my-0 mx-16 md:mx-16 w-[70%] md:w-9/10 md:w-2/5'>
        <img className='w-full' src={img} alt="customer"/>
      </div>
    </div>
  )
}

export default SocialMedia