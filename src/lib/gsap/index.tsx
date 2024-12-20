import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'

gsap.registerPlugin(CustomEase)

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = Number(RECIPROCAL_GR.toFixed(3))
const EASE = CustomEase.create('ease', '0.175, 0.885, 0.32, 1')

// Configuring GSAP with custom settings that aren't Tween-specific
gsap.config({
  nullTargetWarn: false,
  autoSleep: Infinity
})

// Setting default animation properties that should be inherited by ALL tweens
gsap.defaults({
  duration: DURATION,
  ease: 'expo.out'
})

export { CustomEase, DURATION, EASE, GOLDEN_RATIO, gsap }
