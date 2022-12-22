import React from 'react'
import img1 from '../../assets/Group 45.png'
import img2 from '../../assets/Group 46.png'


const Services = () => {
  return (
    <div className='ml-12'>
      <div className='font-gilroy text-lg mt-32 mb-16 text-[#FFFF00]'>
        SERVICES ---
      </div>
      <div className='w-4/5 lg:w-2/5 font-gilroy text-3xl lg:text-5xl mb-16 font-semibold '>
        Our offerings which will make you grow
      </div>
      <div className='block lg:flex mr-10'>
        <div className='w-4/5 lg:w-1/2 aspect-[7/6] mr-16 p-11 lg:p-0 rounded-3xl bg-gradient-to-br from-[#FFA51E] to-[#FA5A92] '>
              <img className='md:mx-10 md:my-10 bg-transparent' src={img1} alt=''/>
              <span className='hidden sm:block bg-transparent  my-10 mx-10 text-[#FFFFFF] font-gilroy text-3xl font-semibold '>
              Customer Review Management
              </span>
              <div className='bg-transparent mx-10 my-5 text-lg text-[#FFFFFF] text-justify font-gilroy hidden md:block'>
              customer reviews are an integral part of your brand. It builds trust, increases traffic and enhances sales. We have a host of product review solutions if you are a brand who needs to make a mark in the industry. Starting from brands who need footfall, to new brands looking to make an impact, we customize product review services across diverse e-commerce platforms to help your brand leave a mark.
              </div>
        </div>

        <div className='w-4/5 lg:w-1/2 aspect-[7/6] mt-10 lg:mt-0 p-11 lg:p-0 rounded-3xl bg-gradient-to-br from-[#FFA51E] to-[#FA5A92] '>
              <img className=' md:mx-10 md:my-10 bg-transparent' src={img2} alt=''/>
              <div className='hidden sm:block bg-transparent my-10 mx-10 text-[#FFFFFF] font-gilroy text-3xl font-semibold '>
                Influencer Marketing
              </div>
              <div className='bg-transparent mx-10 my-5 text-lg text-[#FFFFFF] text-justify font-gilroy hidden md:block bg:transparent'>
              Ever wonder if your brand can start a trend? Well, with our bandwidth of macro and micro influencers, you sure can fructify your brand into a trend!
The influencer marketing factory is a well oiled machine in this digital era. Thus, we curate brand trends with our verified social media influencers to invent, curate and deliver trends with a promise to turn your products and services into the hype of tomorrow.

              </div>
        </div>
      </div>
    </div>
  )
}

export default Services