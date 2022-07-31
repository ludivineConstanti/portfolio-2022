import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { SobelOperatorShader } from "three/examples/jsm/shaders/SobelOperatorShader.js"

import { composer } from "../PlanetParis/scene"

const effectOutlineSobel = new ShaderPass(SobelOperatorShader)
effectOutlineSobel.uniforms["resolution"].value.x =
  window.innerWidth * window.devicePixelRatio
effectOutlineSobel.uniforms["resolution"].value.y =
  window.innerHeight * window.devicePixelRatio

export default {
  ["Enable Outline"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectOutlineSobel)
        } else {
          composer.removePass(effectOutlineSobel)
        }
      }
    },
  },
}
