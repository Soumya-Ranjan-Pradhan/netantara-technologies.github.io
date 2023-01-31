import React from 'react'
import Clientele from './Clientele'
import HeroSection from './components/HeroSection'
import Expertise from './Expertise'
import Partner from './Partner'
import Studies from './Studies'
import Viewpoints from './Viewpoints'
import What from './What'

const Home = () => {
  return (
   <>
    <HeroSection />
    <What />
    <Clientele />
    <Expertise />
    <Studies />
    <Partner />
    <Viewpoints />
   </>
  )
}

export default Home