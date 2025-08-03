import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import GuideSection from '../Components/GuideSection'
import Offer from '../Components/Offer'
import DealsSection from '../Components/DealsSection'
import PartnerSection from '../Components/PartnerSection'
import Aboutus from '../Components/Aboutus'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
        <Hero/>
        <GuideSection/>
        <Offer/>
        <DealsSection/>
        <PartnerSection/>
        <Aboutus/>
        <Footer/>
    </div>
  )
}

export default Home
