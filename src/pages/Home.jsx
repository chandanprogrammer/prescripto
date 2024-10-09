import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
// import Test from '../components/Test' 

const Home = () => {
  return (
    <div>
    {/* <Test /> */}
    <HeroSection/>
    <SpecialityMenu />
    <TopDoctors />
    <Banner />
    </div>
  )
}

export default Home
