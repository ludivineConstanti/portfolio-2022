import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { VerticalBlurShader } from "three/examples/jsm/shaders/VerticalBlurShader.js"

import { composer } from "../PlanetParis/scene"

const effectVerticalBlur = new ShaderPass(VerticalBlurShader)
effectVerticalBlur.uniforms["v"].value = 0

export default {
  ["Enable Vertical Blur"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectVerticalBlur)
        } else {
          composer.removePass(effectVerticalBlur)
        }
      }
    },
  },
  ["Vertical value"]: {
    value: 0,
    min: 0,
    max: 0.1,
    onChange: (v: number) => {
      if (effectVerticalBlur) {
        effectVerticalBlur.uniforms["v"].value = v
      }
    },
  },
}
