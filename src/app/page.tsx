'use client'
import React from 'react'

import { FallingCaps } from './sections/falling-caps'
import { FooterGallery } from './sections/footer-gallery'
import { Gallery } from './sections/gallery'
import { Hero } from './sections/hero'

import { SmoothScrollbar, GlobalCanvas } from '@14islands/r3f-scroll-rig'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <FallingCaps />
      <FooterGallery />

      <SmoothScrollbar />
      <GlobalCanvas />
    </>
  )
}

export default HomePage
