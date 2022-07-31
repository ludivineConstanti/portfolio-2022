import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { ColorifyShader } from "three/examples/jsm/shaders/ColorifyShader.js"
import * as THREE from "three"

import { composer } from "../PlanetParis/scene"

const effectColorify = new ShaderPass(ColorifyShader)

effectColorify.uniforms["color"].value = new THREE.Color(0x5537ff)

export default {
  ["Enable Colorify effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectColorify)
        } else {
          composer.removePass(effectColorify)
        }
      }
    },
  },
}
