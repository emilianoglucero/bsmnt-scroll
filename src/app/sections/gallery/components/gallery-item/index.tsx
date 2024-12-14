import Image from 'next/image'
import React, { useRef } from 'react'

import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'

import s from './gallery-item.module.scss'
import { GalleryImage } from '../../types'

interface GalleryItemProps {
  image: GalleryImage
}

export const GalleryItem = ({ image }: GalleryItemProps) => {
  const ref = useRef<HTMLDivElement>(null!)

  return (
    <>
      <div ref={ref} className={s.container} style={image.style}>
        <Image
          alt="basement-team"
          fill
          priority
          quality={100}
          src={image.url}
        />
      </div>
      <UseCanvas>
        <ScrollScene track={ref}>
          {({ scale }) => (
            <mesh scale={scale}>
              <planeGeometry />
              <meshBasicMaterial color="red" />
            </mesh>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  )
}
