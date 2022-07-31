import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { LuminosityShader } from "three/examples/jsm/shaders/LuminosityShader.js"

import { composer } from "../PlanetParis/scene"

const effectLuminosity = new ShaderPass(LuminosityShader)

export default {
  ["Enable Luminosity effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectLuminosity)
        } else {
          composer.removePass(effectLuminosity)
        }
      }
    },
  },
}
