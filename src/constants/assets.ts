// src/constants/assets.ts
export const ASSETS = {
  AWWWARDS: {
    MODEL_PATH: './models/awwwards.glb',
    IMAGE: {
      SRC: '/assets/awwwards-trophy.png',
      ALT: 'Awwwards trophy'
    }
  },
  GALLERY: {
    IMAGES: [
      {
        URL: '/images/basement-team-1.jpg'
      },
      {
        URL: '/images/basement-team-2.jpg'
      },
      {
        URL: '/images/basement-team-3.jpg'
      },
      {
        URL: '/images/basement-team-4.jpg'
      },
      {
        URL: '/images/basement-team-5.jpg'
      }
    ],
    ALT: 'Basement team'
  },
  CAP: {
    URL: '/assets/Cap.png',
    MODEL: '/models/cap.glb',
    ALT: 'Cap'
  }
} as const
