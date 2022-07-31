import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { BleachBypassShader } from "three/examples/jsm/shaders/BleachBypassShader.js"

import { composer } from "../PlanetParis/scene"

const shaderBleach = BleachBypassShader
const effectBleach = new ShaderPass(shaderBleach)
effectBleach.uniforms["opacity"].value = 0

export default {
  ["Enable Bleach effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectBleach)
        } else {
          composer.removePass(effectBleach)
        }
      }
    },
  },
  ["Opacity bleach"]: {
    value: 0,
    min: -2.5,
    max: 2.5,
    onChange: (v: number) => {
      if (effectBleach) {
        effectBleach.uniforms["opacity"].value = v
      }
    },
  },
}
