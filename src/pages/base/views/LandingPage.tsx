import React from 'react'
import HomeAboutSection from '../components/Home/HomeAboutSection'
import HomeBanner from '../components/Home/HomeBanner'
import HomeHeaderMeta from '../components/Home/HomeHeaderMeta'
import HomeServicesSection from '../components/Home/HomeServicesSection'

const LandingPage = () => {

  return (
    <div>
      <HomeHeaderMeta/>
      <HomeBanner/>
      <HomeAboutSection/>
      <HomeServicesSection/>
    </div>
  )
}

export default LandingPage