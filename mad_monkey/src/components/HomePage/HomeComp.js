import React from 'react'
import img1 from '../../assets/astronaut.png'
import img2 from '../../assets/Frame 16.png'
import img3 from '../../assets/Frame 17.png'
import img4 from '../../assets/Frame 18.png'
import img5 from '../../assets/Frame 19.png'




const HomeComp = () => {
  return (
    <div  className='ml-12'>
        <div className='sm:flex'>
          <div className='mt-32 w-full sm:w-2/5 font-gilroy'>
            <h1 className='text-6xl font-extrabold text-[#FFFF00]'>India's Leading Product Marketing Agency</h1>
            <br/>
            <h5 className='text-lg font-normal text-[#FFFFFF] w-3/4'>With Mad Monkey by its side, Recognition goes bananas for your brand!</h5>
            <br/>
            <button className='pl-8 pr-8 pt-4 pb-4 text-xl rounded-xl text-white
                              bg-gradient-to-br from-[#FFA51E] to-[#FA5A92]
                               '>
              Get in Touch
            </button>
          </div>
          <div className='mt-5 mr-[3rem] sm:flex  sm:m-auto w-[90%] md:w-[587px] aspect-square content-center rounded-full bg-[#FF6E1A]'>
          <br/>
            <img className='bg-transparent mx-auto content-center object-scale-down' src={img1} alt='monkey'/>
            <img
                className='hidden md:block absolute bg-transparent w-[15rem] top-[20rem] left-[68rem] '
                src={img2} alt='highlights'/>
            <img
                className='hidden md:block absolute bg-transparent w-[15rem] top-[12rem] left-[36rem]'
                src={img3} alt='highlights'/>
            <img
                className='hidden md:block absolute bg-transparent w-[20rem] top-[29rem] left-[30rem] '
                src={img4} alt='highlights'/>
            <img
                className='hidden md:block absolute bg-transparent w-[18rem] top-[41rem] left-[60rem] '
                src={img5} alt='highlights'/>

          </div>
        </div>
    </div>
  )
}

export default HomeComp