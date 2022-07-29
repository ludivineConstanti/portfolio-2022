import { effectVignette } from "../PlanetParis/scene"

export default {
  ["Offset"]: {
    value: 0,
    min: -5,
    max: 5,
    onChange: (v: number) => {
      if (effectVignette) {
        effectVignette.uniforms["offset"].value = v
      }
    },
  },
  ["Darkness"]: {
    value: 0,
    min: -5,
    max: 5,
    onChange: (v: number) => {
      if (effectVignette) {
        effectVignette.uniforms["darkness"].value = v
      }
    },
  },
}
