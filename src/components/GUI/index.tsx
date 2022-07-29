import React from "react"
import { useControls, folder } from "leva"

import {
  effectUnrealBloom,
  effectBleach,
  effectSepia,
  effectHorizontalBlur,
  effectVerticalBlur,
  effectPixel,
  settings,
  camera,
} from "../PlanetParis/scene"
import settingsUnrealBloom from "./settingsUnrealBloom"
import settingsDot from "./settingsDot"
import settingsRGBShift from "./settingsRGBShift"
import settingsVignette from "./settingsVignette"

const defaultOptions = { collapsed: true }

const GUI = () => {
  useControls("Camera", {
    ["position x"]: {
      value: settings.camera.position.x,
      min: 0,
      max: 100,
      onChange: (v: number) => {
        if (camera) {
          camera.position.x = v
        }
      },
    },
    ["position y"]: {
      value: settings.camera.position.y,
      min: 0,
      max: 100,
      onChange: (v: number) => {
        if (camera) {
          camera.position.y = v
        }
      },
    },
    ["position z"]: {
      value: settings.camera.position.z,
      min: 0,
      max: 100,
      onChange: (v: number) => {
        if (camera) {
          camera.position.z = v
        }
      },
    },
  })
  useControls("Animation", {
    ["speed"]: {
      value: 1,
      min: 0,
      max: 50,
      onChange: (v: number) => {
        settings.speed = v
      },
    },
  })
  useControls("Post-processing", {
    ["UnrealBloom"]: folder(settingsUnrealBloom),
    ["Dot effect"]: folder(settingsDot),
    ["RGB Shift"]: folder(settingsRGBShift),
    ["bleach opacity"]: {
      value: 0,
      min: -2.5,
      max: 2.5,
      onChange: (v: number) => {
        if (effectBleach) {
          effectBleach.uniforms["opacity"].value = v
        }
      },
    },
    ["sepia amount"]: {
      value: 0,
      min: -2.5,
      max: 2.5,
      onChange: (v: number) => {
        if (effectSepia) {
          effectSepia.uniforms["amount"].value = v
        }
      },
    },
    ["Vignette effect"]: folder(settingsVignette),
    ["horizontal blur"]: {
      value: 0,
      min: 0,
      max: 0.1,
      onChange: (v: number) => {
        if (effectHorizontalBlur) {
          effectHorizontalBlur.uniforms["h"].value = v
        }
      },
    },
    ["vertical blur"]: {
      value: 0,
      min: 0,
      max: 0.1,
      onChange: (v: number) => {
        if (effectVerticalBlur) {
          effectVerticalBlur.uniforms["v"].value = v
        }
      },
    },
    ["pixel size"]: {
      value: 0,
      min: 0,
      max: 100,
      onChange: (v: number) => {
        if (effectPixel) {
          effectPixel.uniforms["pixelSize"].value = v
        }
      },
    },
  })

  return <div style={{ position: "absolute" }} />
}

export default React.memo(GUI)
