import React from 'react'
import img from '../../assets/Tie.png'

const About = () => {
  return (
    <div className='ml-12'>
    <div className='block lg:flex mt-16 ml-7'>
      <div className='w-4/5 lg:w-1/2 py-10 px-3 lg:px-0 lg:py-40 bg-[#F4F3EE] rounded-3xl'>
              <img className='bg-transparent m-auto' src={img} alt='monkey'/>
      </div>
      <div className='sm:w-2/3 sm:mx-32 my-16'>
          <div className='text-[#FFFF00] font-gilroy my-7'>
                ABOUT US ---
          </div>
          <div className='my-7 font-gilroy text-[#FFFFFF] text-3xl lg:text-5xl font-bold ' >
              Your Brand, Our Reach, <br/> a saga forged in heaven
          </div>

        <div className='hidden sm:block '>
            <div className='font-gilroy' >
              <div className='my-5 mx-0 text-xl text-justify'>
                Welcome to the jungle of Mad Monkey. To put into layman’s terms, we are a group of service providers who “curate-with-care”, the most impactful solutions to your marketing needs. 
              </div>
              <div className='my-5 mx-0 text-xl text-justify'>
              In other words, we put the “fun” in the “fun-damentals” of your marketing needs, from transformation, development to execution. 
              </div>
              <div className='my-5 mx-0 text-xl text-justify'>
              Our motto is to customize solutions to suit your Brand needs that make an impact in the market!
              </div>
              <div className='my-5 mx-0 text-xl text-justify'>
              Connect with us to leave your worry behind and go ballistic into the wide world of brands, and this is our Madmonkey promise.
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About