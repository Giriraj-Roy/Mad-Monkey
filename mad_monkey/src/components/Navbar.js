import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Hamburger from 'hamburger-react'


const Navbar = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className='flex mt-[40px] ml-4 md:ml-12'>
        <Link className='md:p-4 font-junkdog text-[#FF6E1A] text-[36px]' to='/'>Mad Monkey</Link>

        <div className= {`block w-1/12 lg:hidden ml-20`} onClick= { () => setOpen(!open)} >
          <Hamburger />
        </div>

        <div className='hidden lg:block absolute left-1/4 mt-4  p-4 m-auto'>
          <Link className='m-10' to='/contact'>Contact</Link>
          <Link className='' to='/casestudies'>CaseStudies</Link>

        </div>
        <div className={`${open ? 'flex' : 'hidden'} mt-32 absolute`}>
                <ul className='flex'>
                  <li><Link className='m-5' to='/contact'>Contact</Link></li>
                  <li><Link className='' to='/casestudies'>CaseStudies</Link></li>
                  {/* <li>Content</li>
                  <li>Content</li> */}

                </ul>
          </div>
    </div>
  )
}

export default Navbar