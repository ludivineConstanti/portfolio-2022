import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js"

import { composer } from "../PlanetParis/scene"

const defaultSettings = {
  amount: 0.01,
  angle: 0,
}

const effectRGBShift = new ShaderPass(RGBShiftShader)
effectRGBShift.uniforms["amount"].value = defaultSettings.amount
effectRGBShift.uniforms["angle"].value = defaultSettings.angle

export default {
  ["Enable RGB Shift effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectRGBShift)
        } else {
          composer.removePass(effectRGBShift)
        }
      }
    },
  },
  ["Amount RGB Shift"]: {
    value: defaultSettings.amount,
    min: -0.5,
    max: 0.5,
    onChange: (v: number) => {
      if (effectRGBShift) {
        effectRGBShift.uniforms["amount"].value = v
      }
    },
  },
  ["Angle RGB Shift"]: {
    value: defaultSettings.angle,
    min: -Math.PI,
    max: Math.PI,
    onChange: (v: number) => {
      if (effectRGBShift) {
        effectRGBShift.uniforms["angle"].value = v
      }
    },
  },
}
