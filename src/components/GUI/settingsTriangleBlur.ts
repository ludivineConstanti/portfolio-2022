import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { TriangleBlurShader } from "three/examples/jsm/shaders/TriangleBlurShader.js"

import { composer } from "../PlanetParis/scene"

const effectTriangleBlur = new ShaderPass(TriangleBlurShader)

export default {
  ["Enable Triangle Blur"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectTriangleBlur)
        } else {
          composer.removePass(effectTriangleBlur)
        }
      }
    },
  },
  ["Delta triangle blur"]: {
    value: 0,
    min: -100,
    max: 100,
    onChange: (v: number) => {
      if (effectTriangleBlur) {
        effectTriangleBlur.uniforms["delta"].value = v
      }
    },
  },
}
