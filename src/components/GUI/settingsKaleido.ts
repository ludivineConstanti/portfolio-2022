import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { KaleidoShader } from "three/examples/jsm/shaders/KaleidoShader.js"

import { composer } from "../PlanetParis/scene"

const shaderKaleido = KaleidoShader
const effectKaleido = new ShaderPass(shaderKaleido)

export default {
  ["Enable Kaleido effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectKaleido)
        } else {
          composer.removePass(effectKaleido)
        }
      }
    },
  },
  ["Sides number kaleido"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectKaleido) {
        effectKaleido.uniforms["sides"].value = v
      }
    },
  },
  ["Angle number kaleido"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectKaleido) {
        effectKaleido.uniforms["angle"].value = v
      }
    },
  },
}
