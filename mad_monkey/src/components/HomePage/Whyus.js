import React from 'react'
import emo1 from '../../assets/image 26.png'
import emo2 from '../../assets/image 121.png'
import emo3 from '../../assets/image 29.png'


const Whyus = () => {
    return (
        <div className='mt-96 ml-12'>
            <div className='font-gilroy text-[#FFFF00] text-xl'>
                WHY US ---
            </div>
            <br/>
            <div className='font-gilroy text-[#FFFFFF] text-3xl md:text-5xl font-semibold w-8/10 md:w-1/2 '>
                We belief in customized approach
            </div>
            <br/>
            <br/>
            <div className='block md:flex w-full'>
                <div className='bg-[#E63946] w-[75%] md:w-[30%] aspect-[3/1] md:aspect-[4/3] mb-10 md:mb-0 mr-1 md:mr-10 p-5 rounded-xl text-white '>
                        <img
                            className='bg-transparent my-2'
                            src={emo1} alt='wink'
                        />
                    <div className='bg-transparent my-2 font-gilroy font-semibold text-2xl'>
                        Cost Effective

                    </div>
                    <div className='bg-transparent hidden md:block font-gilroy font-light text-base'>
                        Less like the shopping malls, and more like the Sarojini Nagar, we believe in cost and quality. Now that you have found Madmonkey, we promise the most reasonable investment to most effective solutions, in the least time possible.
                    </div>
                </div>
                <div className='bg-[#E63946] w-[75%] md:w-[30%] aspect-[3/1] md:aspect-[4/3] mb-10 md:mb-0 mr-1 md:mr-10 p-5 rounded-xl text-white '>
                        <img
                            className='bg-transparent my-2'
                            src={emo2} alt='face'
                        />
                    <div className='bg-transparent my-2 font-gilroy font-semibold text-2xl'>
                        Brand Camaraderie
                    </div>
                    <div className='bg-transparent hidden md:block font-gilroy font-light text-base '>
                        The best way to get to know someone is to spend time, analyze and understand. That is exactly what we do! We take our time to know your brand, personalize solutions to your problems and et voila! double your profits both in money and mirth.                    
                    </div>
                </div>
                <div className='bg-[#E63946] w-[75%] md:w-[30%] aspect-[3/1] md:aspect-[4/3] mb-10 md:mb-0 mr-1 md:mr-10 p-5 rounded-xl text-white '>

                        <img
                            className='bg-transparent my-2'
                            src={emo3} alt='adore'
                        />

                    <div className='bg-transparent my-2 font-gilroy font-semibold text-2xl'>
                        Personalized assistance
                    </div>
                    <div className='bg-transparent hidden md:block font-gilroy font-light text-base'>
                    Throughout our journey, we have trained our professionals in customer support. So rest assured, any time you have a query or discrepancy, we shall be there on the other side of the telephone, walking through every doubt in your mind.                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whyus