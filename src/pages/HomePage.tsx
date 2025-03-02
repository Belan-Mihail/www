import React from 'react'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import WorkSectionTwo from '../components/WorkSectionTwo'
import ActionOrder from '../components/ActionOrder'
import Accordion from '../components/Accordion'

const HomePage = () => {
  return (
    <>
      <Hero />  
      <WorkSection />
      <WorkSectionTwo />
      <ActionOrder />
      <Accordion />
    </>
  )
}

export default HomePage