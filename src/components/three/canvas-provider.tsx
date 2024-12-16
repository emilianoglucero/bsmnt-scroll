'use client'
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'

export function CanvasProvider() {
  return (
    <>
      <GlobalCanvas />
      <SmoothScrollbar
        config={{
          easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
          direction: 'vertical',
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2
        }}
      />
    </>
  )
}
