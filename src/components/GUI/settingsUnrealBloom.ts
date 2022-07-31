import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js"
import * as THREE from "three"

import { composer } from "../PlanetParis/scene"

const defaultSettings = {
  threshold: 0.5,
  strength: 0.3,
  radius: 3.3,
}

const effectUnrealBloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  defaultSettings.threshold,
  defaultSettings.strength,
  defaultSettings.radius
)

export default {
  ["Enable Unreal Bloom effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectUnrealBloom)
        } else {
          composer.removePass(effectUnrealBloom)
        }
      }
    },
  },
  ["Threshold Unreal bloom"]: {
    value: defaultSettings.threshold,
    min: -1,
    max: 1,
    onChange: (v: number) => {
      if (effectUnrealBloom) {
        effectUnrealBloom.threshold = v
      }
    },
  },
  ["Strength Unreal bloom"]: {
    value: defaultSettings.strength,
    min: 0,
    max: 5,
    onChange: (v: number) => {
      if (effectUnrealBloom) {
        effectUnrealBloom.strength = v
      }
    },
  },
  ["Radius Unreal bloom"]: {
    value: defaultSettings.radius,
    min: 0,
    max: 5,
    onChange: (v: number) => {
      if (effectUnrealBloom) {
        effectUnrealBloom.radius = v
      }
    },
  },
}
