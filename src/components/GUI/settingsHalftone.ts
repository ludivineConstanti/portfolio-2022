import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { HalftoneShader } from "three/examples/jsm/shaders/HalftoneShader.js"

import { composer } from "../PlanetParis/scene"

const defaultSettings = {
  shape: 1,
  radius: 4,
  scatter: 0,
  width: 1,
  height: 1,
  blending: 1,
  blendingMode: 1,
}

const effectHalftone = new ShaderPass(HalftoneShader)

effectHalftone.uniforms["shape"].value = defaultSettings.shape
effectHalftone.uniforms["radius"].value = defaultSettings.radius
effectHalftone.uniforms["scatter"].value = defaultSettings.scatter
effectHalftone.uniforms["width"].value = defaultSettings.width
effectHalftone.uniforms["height"].value = defaultSettings.height
effectHalftone.uniforms["blending"].value = defaultSettings.blending
effectHalftone.uniforms["blendingMode"].value = defaultSettings.blendingMode

export default {
  ["Enable Halftone"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectHalftone)
        } else {
          composer.removePass(effectHalftone)
        }
      }
    },
  },
  ["Shape Halftone"]: {
    value: defaultSettings.shape,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["shape"].value = v
      }
    },
  },
  ["Radius Halftone"]: {
    value: defaultSettings.radius,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["radius"].value = v
      }
    },
  },
  ["RotateR Halftone"]: {
    value: 0,
    min: -Math.PI,
    max: Math.PI,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["rotateR"].value = v
      }
    },
  },
  ["RotateG Halftone"]: {
    value: 0,
    min: -Math.PI,
    max: Math.PI,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["rotateG"].value = v
      }
    },
  },
  ["RotateB Halftone"]: {
    value: 0,
    min: -Math.PI,
    max: Math.PI,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["rotateB"].value = v
      }
    },
  },
  ["Scatter Halftone"]: {
    value: defaultSettings.scatter,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["scatter"].value = v
      }
    },
  },
  ["Width Halftone"]: {
    value: defaultSettings.width,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["width"].value = v
      }
    },
  },
  ["Height Halftone"]: {
    value: defaultSettings.height,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["height"].value = v
      }
    },
  },
  ["Blending Halftone"]: {
    value: defaultSettings.blending,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["blending"].value = v
      }
    },
  },
  ["Blending Mode Halftone"]: {
    value: defaultSettings.blendingMode,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["blendingMode"].value = v
      }
    },
  },
  ["Greyscale Halftone"]: {
    value: false,
    onChange: (v: number) => {
      if (effectHalftone) {
        effectHalftone.uniforms["greyscale"].value = v
      }
    },
  },
}
