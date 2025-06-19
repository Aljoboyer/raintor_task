import AboutSection from '@/components/task1/AboutSection/About'
import HeroSection from '@/components/task1/shared/HeroSection'
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
        <HeroSection/>
        <AboutSection/>
    </div>
  )
}
