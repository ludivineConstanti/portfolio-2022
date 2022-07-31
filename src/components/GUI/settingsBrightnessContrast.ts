import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { BrightnessContrastShader } from "three/examples/jsm/shaders/BrightnessContrastShader.js"

import { composer } from "../PlanetParis/scene"

const effectBrightnessContrast = new ShaderPass(BrightnessContrastShader)

export default {
  ["Enable Brightness Contrast Effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectBrightnessContrast)
        } else {
          composer.removePass(effectBrightnessContrast)
        }
      }
    },
  },
  ["Brightness value"]: {
    value: 0,
    min: -1,
    max: 1,
    onChange: (v: number) => {
      if (effectBrightnessContrast) {
        effectBrightnessContrast.uniforms["brightness"].value = v
      }
    },
  },
  ["Contrast value"]: {
    value: 0,
    min: -10,
    max: 10,
    onChange: (v: number) => {
      if (effectBrightnessContrast) {
        effectBrightnessContrast.uniforms["contrast"].value = v
      }
    },
  },
}
