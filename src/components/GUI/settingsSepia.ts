import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { SepiaShader } from "three/examples/jsm/shaders/SepiaShader.js"

import { composer } from "../PlanetParis/scene"

const defaultSettings = {
  amount: 1.5,
}

const shaderSepia = SepiaShader
const effectSepia = new ShaderPass(shaderSepia)
effectSepia.uniforms["amount"].value = defaultSettings.amount

export default {
  ["Enable Sepia Effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectSepia)
        } else {
          composer.removePass(effectSepia)
        }
      }
    },
  },
  ["Amount sepia"]: {
    value: defaultSettings.amount,
    min: -2.5,
    max: 2.5,
    onChange: (v: number) => {
      if (effectSepia) {
        effectSepia.uniforms["amount"].value = v
      }
    },
  },
}
