import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Vector2.png'

const LetsTalk = () => {
    return (
        <div className='mx-4 md:mx-16 my-4 md:my-32 pb-10
                        w-[90%] aspect-[4/1]
                        bg-gradient-to-br from-[#5800FF] via-[#E900FF] to-[#FFC600] rounded-[3rem]
                        font-gilroy '>
            <div className='mx-4 md:mx-20 pt-8 md:pt-16
                            bg-transparent
                            text-base md:text-4xl font-[400]'>
                We want to hear about your brand and business challenges, even if you're unsure of your next steps. We promise that there will be no sales pitch and no strings attached.
            </div>
            <Link to='/contact' className='flex bg-transparent underline'>
                <div className='ml-10 md:ml-20 mt-10
                                bg-transparent
                                text-base md:text-4xl font-[600]'>
                        Sound Good? Let’s Talk
                </div>
                <img  className='ml-2 md:ml-5 mt-8 bg-transparent ' src={img} alt='arrow'/>
            </Link>
        </div>
    )
}

export default LetsTalk