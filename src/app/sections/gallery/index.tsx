import React from 'react'

import { Container } from '~/components/layout/container'
import { GalleryItem } from './components/gallery-item'
import type { GalleryImage } from './types'

import s from './gallery.module.scss'

export const Gallery = () => {
  const images: GalleryImage[] = [
    {
      url: '/images/basement-team-1.jpg',
      style: {
        gridArea: '1 / 1 / 1 / 13'
      }
    },
    {
      url: '/images/basement-team-2.jpg',
      style: {
        gridArea: '2 / 1 / 3 / 9'
      }
    },
    {
      url: '/images/basement-team-3.jpg',
      style: {
        gridArea: '2 / 9 / 3 / 13'
      }
    }
  ]
  return (
    <Container as="section" className={s.container}>
      {images.map((image, index) => (
        <GalleryItem key={index} image={image} />
      ))}
    </Container>
  )
}
