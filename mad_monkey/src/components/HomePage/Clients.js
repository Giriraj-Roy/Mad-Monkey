import React from 'react'
import img1 from '../../assets/logos/download (7).png'
import img2 from '../../assets/logos/Page-1.png'
import img3 from '../../assets/logos/idpC7rHSHe 22.png'
import img4 from '../../assets/logos/305765290_493191632814674_5509348675110236374_n 2.png'
import img5 from '../../assets/logos/hkI-3zd8_400x400 22.png'
import img6 from '../../assets/logos/Group 86.png'
import img7 from '../../assets/logos/186503075_103881578556307_4983401064732653971_n.png'
import img8 from '../../assets/logos/Group 85.png'
import img9 from '../../assets/logos/270786312_448302943512260_7604052547616714643_n 22.png'
import img10 from '../../assets/logos/papboo-logo-1.png'
import img11 from '../../assets/logos/The Vitamin Factory Logo 1.png'



const Clients = () => {
  return (
    <div className='my-32 bg-[#FFFFFF] w-full aspect-[4/1] py-10 px-10'>
        <div className='px-10 my-5 bg-transparent text-[#000000] font-gilroy font-[600]'>
            OUR CLIENTS ---
        </div>
        <div className='bg-transparent block'>
            <div className='my-10 bg-transparent flex justify-around'>
                <img className='bg-transparent h-10' src={img1} alt='clients'/>
                <img className='bg-transparent h-10' src={img2} alt='clients'/>
                <img className='bg-transparent h-10' src={img3} alt='clients'/>
                <img className='bg-transparent h-10' src={img4} alt='clients'/>
                <img className='bg-transparent h-10' src={img5} alt='clients'/>
                <img className='bg-transparent h-10' src={img6} alt='clients'/>
            </div>
            <div className='my-10 bg-transparent flex justify-around'>
                <img className='bg-transparent h-10' src={img7} alt='clients'/>
                <img className='bg-transparent h-10' src={img8} alt='clients'/>
                <img className='bg-transparent h-10' src={img9} alt='clients'/>
                <img className='bg-transparent h-10' src={img10} alt='clients'/>
                <img className='bg-transparent h-10' src={img11} alt='clients'/>
            </div>


        </div>

    </div>
  )
}

export default Clients