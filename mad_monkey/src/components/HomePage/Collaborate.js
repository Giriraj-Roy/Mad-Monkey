import React from 'react'
import img1 from '../../assets/quote.png'
import reviews from '../../Reviews'

const Collaborate = () => {
    return (
        <div className='mx-20 flex font-gilroy text-[#FFFFFF]'>
            <div className='w-1/3'>
                <div className=' text-[3.3rem] font-[600]'>
                    What it’s like <br/> to collaborate together.
                </div>
                <div className='mt-8 mb-32 text-xl font-[500]'>
                    Become partners for the long run
                </div>
            </div>
            <div className='ml-32 aspect-[1/1] w-1/2'>
                <div className='bg-[#1B2025] w-2/5 aspect-[1.5/1] absolute z-10 rounded-3xl '>
                    <img className='pl-5 pt-5 bg-transparent' src={img1} alt='quotes'/>
                </div>
                <div className='ml-16 mt-16 bg-[#0D0D0D] w-full aspect-[1.5/1] relative z-20 rounded-3xl '>
                    {
                        reviews.map( item => (
                            <div className='bg-transparent'>
                                <div className='py-10 px-8 bg-transparent text-3xl font-[400]'>
                                    
                                </div>
                                <hr/>
                                <div>

                                </div>
                        </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Collaborate