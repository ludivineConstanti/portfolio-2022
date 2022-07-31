import * as THREE from "three"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js"
import { SubsurfaceScatteringShader } from "three/examples/jsm/shaders/SubsurfaceScatteringShader.js"

import { composer } from "../PlanetParis/scene"

const effectSubsurfaceScattering = new ShaderPass(SubsurfaceScatteringShader)

export default {
  ["Enable Subsurface scattering"]: {
    value: false,
    onChange: (v: boolean) => {
      if (composer) {
        if (v === true) {
          composer.addPass(effectSubsurfaceScattering)
        } else {
          composer.removePass(effectSubsurfaceScattering)
        }
      }
    },
  },
  ["Thickness Distortion scattering"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectSubsurfaceScattering) {
        effectSubsurfaceScattering.uniforms["thicknessDistortion"].value = v
      }
    },
  },
  ["Thickness Ambient scattering"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectSubsurfaceScattering) {
        effectSubsurfaceScattering.uniforms["thicknessAmbient"].value = v
      }
    },
  },
  ["Thickness Attenuation scattering"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectSubsurfaceScattering) {
        effectSubsurfaceScattering.uniforms["thicknessAttenuation"].value = v
      }
    },
  },
  ["Thickness Power scattering"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectSubsurfaceScattering) {
        effectSubsurfaceScattering.uniforms["thicknessPower"].value = v
      }
    },
  },
  ["Thickness Scale scattering"]: {
    value: 0,
    min: 0,
    max: 10,
    onChange: (v: number) => {
      if (effectSubsurfaceScattering) {
        effectSubsurfaceScattering.uniforms["thicknessScale"].value = v
      }
    },
  },
}
