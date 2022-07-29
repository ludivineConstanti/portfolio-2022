import { effectRGBShift } from "../PlanetParis/scene"

export default {
  ["Amount"]: {
    value: 0,
    min: -0.5,
    max: 0.5,
    onChange: (v: number) => {
      if (effectRGBShift) {
        effectRGBShift.uniforms["amount"].value = v
      }
    },
  },
  ["Angle"]: {
    value: 0,
    min: -Math.PI,
    max: Math.PI,
    onChange: (v: number) => {
      if (effectRGBShift) {
        effectRGBShift.uniforms["angle"].value = v
      }
    },
  },
}
