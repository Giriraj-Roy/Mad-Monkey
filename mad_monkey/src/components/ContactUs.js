import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Glasses.png'
import arr from '../assets/Vector2.png'

const ContactUs = () => {
    return (
    <div className='ml-16 my-32 w-[90%] aspect-[4/1] font-gilroy bg-gradient-to-br from-[#FFA51E] to-[#FA5A92] rounded-[3rem] '>
        <div className='bg-transparent w-full flex'>
            <div className='bg-transparent my-10'>
                <div className='bg-transparent mx-16 mt-10  text-5xl font-bold '>
                    Make Mad Monkey your growth partner today
                </div>
                <div className='bg-transparent flex w-[30%] my-3 mx-16'>
                    <Link className='bg-transparent underline ' to='/contact'>
                    <div className='bg-transparent my-6 flex font-[700] text-4xl'>
                        Contact us
                        <img className='bg-transparent mx-3' src={arr} alt='arrow'/>
                    </div>
                    </Link>
                </div>
            </div>
            <img className='bg-transparent mt-16 mr-10 w-[20%]' src={img} alt="Monkey"/>
        </div>
    </div>
)
}

export default ContactUs