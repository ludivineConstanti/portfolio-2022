import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { LuminosityHighPassShader } from "three/examples/jsm/shaders/LuminosityHighPassShader.js"

import { composer } from "../PlanetParis/scene"

const effectLuminosityHighPass = new ShaderPass(LuminosityHighPassShader)

export default {
  ["Enable Luminosity High Pass effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectLuminosityHighPass)
        } else {
          composer.removePass(effectLuminosityHighPass)
        }
      }
    },
  },
  ["Luminosity Threshold Luminosity High Pass"]: {
    value: -1,
    min: 0,
    max: 1,
    onChange: (v: number) => {
      if (effectLuminosityHighPass) {
        effectLuminosityHighPass.uniforms["luminosityThreshold"].value = v
      }
    },
  },
  ["Smooth Width High Pass"]: {
    value: 0,
    min: 0,
    max: 1,
    onChange: (v: number) => {
      if (effectLuminosityHighPass) {
        effectLuminosityHighPass.uniforms["smoothWidth"].value = v
      }
    },
  },
}
