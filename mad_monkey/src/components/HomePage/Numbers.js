import React from 'react'

const Numbers = () => {
  return (
    <div className='my-40 w-full aspect-[4/1] bg-[#08BA64] font-gilroy text-[#FFFFFF] text-center'>
        <div className='my-16 pt-16 bg-inherit'>
            <div className='bg-inherit text-5xl  font-[800] '>
                Some numbers that matter
            </div>
            <div className='bg-inherit text-lg font-[400]'>
                Our achievement in the journey depicted in numbers
            </div>
        </div>
        <div className='bg-inherit flex  justify-center'>
            <div className='px-12 bg-inherit block border-r '>
                <div className='bg-inherit text-5xl font-[800]  '>
                    50+
                </div>
                <div className='bg-inherit'>
                    Happy Clients
                </div>

            </div>
            {/* <hr className='border-white '/> */}
            <div className='px-12 bg-inherit block border-r '>
                <div className='bg-inherit text-5xl font-extrabold  '>
                    25K+
                </div>
                <div className='bg-inherit'>
                    Reviews Posted
                </div>
            </div>
            <hr/>
            <div className='px-12 bg-inherit block border-r '>
                <div className='bg-inherit text-5xl font-[800]  '>
                    21
                </div>
                <div className='bg-inherit'>
                    Dedicated Members
                </div>
            </div>
            <hr/>
            <div className='px-12 bg-inherit block '>
                <div className='bg-inherit text-5xl font-[800]  '>
                    2
                </div>
                <div className='bg-inherit'>
                    Years of Journey
                </div>
            </div>
        </div>
    </div>
)
}

export default Numbers