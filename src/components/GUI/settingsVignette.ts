import { VignetteShader } from "three/examples/jsm/shaders/VignetteShader.js"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"

import { composer } from "../PlanetParis/scene"

const shaderVignette = VignetteShader
const effectVignette = new ShaderPass(shaderVignette)
effectVignette.uniforms["offset"].value = 0
effectVignette.uniforms["darkness"].value = 0

export default {
  ["Enable Vignette effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectVignette)
        } else {
          composer.removePass(effectVignette)
        }
      }
    },
  },
  ["Offset Vignette"]: {
    value: 0,
    min: -5,
    max: 5,
    onChange: (v: number) => {
      if (effectVignette) {
        effectVignette.uniforms["offset"].value = v
      }
    },
  },
  ["Darkness Vignette"]: {
    value: 0,
    min: -5,
    max: 5,
    onChange: (v: number) => {
      if (effectVignette) {
        effectVignette.uniforms["darkness"].value = v
      }
    },
  },
}
