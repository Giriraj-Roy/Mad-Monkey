import React from 'react'
import About from '../components/HomePage/About'
import Process from '../components/HomePage/Process'
import ResultDriven from '../components/HomePage/ResultDriven'
// import Services from '../components/HomePage/Services'
// import img1 from '../assets/astronaut.png'
import Whyus from '../components/HomePage/Whyus'
import Numbers from '../components/HomePage/Numbers'
import ContactUs from '../components/ContactUs'
import CaseStudies from '../components/HomePage/CaseStudies'
import HomeComp from '../components/HomePage/HomeComp'
import Clients from '../components/HomePage/Clients'
import Collaborate from '../components/HomePage/Collaborate'

const Home = () => {
  return (
    <div>
      <HomeComp/>
      <About/>
      {/* <Services/>      //This Section is no more needed. Services has a separate page now */}
      <Process/>
      <ResultDriven/>
      <Whyus/>
      <Numbers />
      <Collaborate/>
      <Clients/>
      <CaseStudies/>
      <ContactUs/>
    </div>
  )
}

export default Home

