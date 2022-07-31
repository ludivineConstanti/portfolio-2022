import * as THREE from "three"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { DotScreenShader } from "three/examples/jsm/shaders/DotScreenShader.js"

import { composer } from "../PlanetParis/scene"

const effectDot = new ShaderPass(DotScreenShader)

export default {
  ["Enable Dot effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectDot)
        } else {
          composer.removePass(effectDot)
        }
      }
    },
  },
  ["Scale dot"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectDot) {
        effectDot.uniforms["scale"].value = v
      }
    },
  },
  ["Size dot"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectDot) {
        effectDot.uniforms["center"].value = new THREE.Vector2(v, v)
      }
    },
  },
  ["Angle dot"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectDot) {
        effectDot.uniforms["angle"].value = v
      }
    },
  },
}
