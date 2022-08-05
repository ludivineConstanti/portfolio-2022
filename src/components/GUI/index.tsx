import React from "react"
import { useControls, folder } from "leva"

import { settings, camera } from "../PlanetParis/scene"
import settingsUnrealBloom from "./settingsUnrealBloom"
import settingsDot from "./settingsDot"
import settingsRGBShift from "./settingsRGBShift"
import settingsVignette from "./settingsVignette"
import settingsOutlineSobel from "./settingsOutlineSobel"
import settingsPixel from "./settingsPixel"
import settingsSepia from "./settingsSepia"
import settingsBleach from "./settingsBleach"
import settingsHorizontalBlur from "./settingsHorizontalBlur"
import settingsVerticalBlur from "./settingsVerticalBlur"
import settingsHueSaturation from "./settingsHueSaturation"
import settingsKaleido from "./settingsKaleido"
import settingsTriangleBlur from "./settingsTriangleBlur"
import settingsBrightnessContrast from "./settingsBrightnessContrast"
import settingsHalftone from "./settingsHalftone"
import settingsColorify from "./settingsColorify"
import settingsLuminosity from "./settingsLuminosity"
import settingsSubsurfaceScattering from "./settingsSubsurfaceScattering"
import settingsLuminosityHighPass from "./settingsLuminosityHighPass"

const defaultOptions = { collapsed: true }

// WARNING! all properties names should be different
// Otherwise, they will not show up in the GUI
const GUI = () => {
  useControls(
    "Camera",
    {
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
    },
    defaultOptions
  )
  useControls(
    "Animation",
    {
      ["speed"]: {
        value: 1,
        min: 0,
        max: 50,
        onChange: (v: number) => {
          settings.speed = v
        },
      },
    },
    defaultOptions
  )
  useControls("Post-processing", {
    ["Unreal Bloom effect"]: folder(settingsUnrealBloom, defaultOptions),
    ["Dot effect"]: folder(settingsDot, defaultOptions),
    ["RGB Shift"]: folder(settingsRGBShift, defaultOptions),
    // ["Bleach effect"]: folder(settingsBleach, defaultOptions),
    // ["Sepia effect"]: folder(settingsSepia, defaultOptions),
    // ["Vignette effect"]: folder(settingsVignette, defaultOptions),
    ["Horizontal blur"]: folder(settingsHorizontalBlur, defaultOptions),
    ["Vertical blur"]: folder(settingsVerticalBlur, defaultOptions),
    ["Pixel effect"]: folder(settingsPixel, defaultOptions),
    ["Hue Saturation"]: folder(settingsHueSaturation, defaultOptions),
    ["Kaleido"]: folder(settingsKaleido, defaultOptions),
    // ["Triangle blur effect"]: folder(settingsTriangleBlur, defaultOptions),
    ["Brightness Contrast effect"]: folder(
      settingsBrightnessContrast,
      defaultOptions
    ),
    // ["Halftone effect"]: folder(settingsHalftone, defaultOptions),
    // ["Colorify effect"]: folder(settingsColorify, defaultOptions),
    ["Luminosity effect"]: folder(settingsLuminosity, defaultOptions),
    /* ["Luminosity High Pass effect"]: folder(
      settingsLuminosityHighPass,
      defaultOptions
    ), */
    /* ["Subsurface Scattering effect"]: folder(
      settingsSubsurfaceScattering,
      defaultOptions
    ), */
    ["Outline effect"]: folder(settingsOutlineSobel, defaultOptions),
  })

  return <div style={{ position: "absolute" }} />
}

export default GUI
