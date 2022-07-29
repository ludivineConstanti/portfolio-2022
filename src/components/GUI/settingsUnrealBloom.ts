import { effectUnrealBloom } from "../PlanetParis/scene"

export default {
  ["Threshold"]: {
    value: 0,
    min: -1,
    max: 1,
    onChange: (v: number) => {
      if (effectUnrealBloom) {
        effectUnrealBloom.threshold = v
      }
    },
  },
  ["Strength"]: {
    value: 0,
    min: 0,
    max: 5,
    onChange: (v: number) => {
      if (effectUnrealBloom) {
        effectUnrealBloom.strength = v
      }
    },
  },
  ["Radius"]: {
    value: 0,
    min: 0,
    max: 5,
    onChange: (v: number) => {
      if (effectUnrealBloom) {
        effectUnrealBloom.radius = v
      }
    },
  },
}
