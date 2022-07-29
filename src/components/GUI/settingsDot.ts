import * as THREE from "three"
import { effectDot } from "../PlanetParis/scene"

export default {
  ["Scale"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectDot) {
        effectDot.uniforms["scale"].value = v
      }
    },
  },
  ["Size"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectDot) {
        effectDot.uniforms["center"].value = new THREE.Vector2(v, v)
      }
    },
  },
  ["Angle"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectDot) {
        effectDot.uniforms["angle"].value = v
      }
    },
  },
}
