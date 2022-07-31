import * as THREE from "three"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { PixelShader } from "three/examples/jsm/shaders/PixelShader.js"

import { composer } from "../PlanetParis/scene"

const defaultSettings = {
  size: 20,
}

const effectPixel = new ShaderPass(PixelShader)
effectPixel.uniforms["resolution"].value = new THREE.Vector2(
  window.innerWidth,
  window.innerHeight
)
effectPixel.uniforms["resolution"].value.multiplyScalar(window.devicePixelRatio)
effectPixel.uniforms["pixelSize"].value = defaultSettings.size

export default {
  ["Enable Pixel effect"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectPixel)
        } else {
          composer.removePass(effectPixel)
        }
      }
    },
  },
  ["Size pixels"]: {
    value: defaultSettings.size,
    min: 0,
    max: 100,
    onChange: (v: number) => {
      if (effectPixel) {
        effectPixel.uniforms["pixelSize"].value = v
      }
    },
  },
}
