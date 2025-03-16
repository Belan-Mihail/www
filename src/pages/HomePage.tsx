import React from 'react'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import WorkSectionTwo from '../components/WorkSectionTwo'
import ActionOrder from '../components/ActionOrder'
import Accordion from '../components/Accordion'
import ContactForm from '../components/ContactForm'
import Modal from '../components/Modal'


const HomePage = () => {
  return (
    <>
      <Modal />
      <Hero />  
      <WorkSection />
      <WorkSectionTwo />
      <ActionOrder />
      <Accordion />
      <ContactForm />
      
    </>
  )
}

export default HomePage