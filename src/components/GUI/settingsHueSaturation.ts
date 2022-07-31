import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { HueSaturationShader } from "three/examples/jsm/shaders/HueSaturationShader.js"

import { composer } from "../PlanetParis/scene"

const effectHueSaturation = new ShaderPass(HueSaturationShader)

export default {
  ["Enable Hue Saturation"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectHueSaturation)
        } else {
          composer.removePass(effectHueSaturation)
        }
      }
    },
  },
  ["Hue value"]: {
    value: 0,
    min: 0,
    max: 1,
    onChange: (v: number) => {
      if (effectHueSaturation) {
        effectHueSaturation.uniforms["hue"].value = v
      }
    },
  },
  ["Saturation value"]: {
    value: 0,
    min: -5,
    max: 5,
    onChange: (v: number) => {
      if (effectHueSaturation) {
        effectHueSaturation.uniforms["saturation"].value = v
      }
    },
  },
}
