import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { HorizontalBlurShader } from "three/examples/jsm/shaders/HorizontalBlurShader.js"

import { composer } from "../PlanetParis/scene"

const effectHorizontalBlur = new ShaderPass(HorizontalBlurShader)
effectHorizontalBlur.uniforms["h"].value = 0

export default {
  ["Enable Horizontal blur"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectHorizontalBlur)
        } else {
          composer.removePass(effectHorizontalBlur)
        }
      }
    },
  },
  ["Horizontal value"]: {
    value: 0,
    min: 0,
    max: 0.1,
    onChange: (v: number) => {
      if (effectHorizontalBlur) {
        effectHorizontalBlur.uniforms["h"].value = v
      }
    },
  },
}
