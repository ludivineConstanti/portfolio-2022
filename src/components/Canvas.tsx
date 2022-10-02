import React, { useEffect, Suspense, useState } from "react"
import styled from "styled-components"
import { Canvas } from "@react-three/fiber"
import { NoToneMapping } from "three"
import * as core from "@theatre/core"
import studio from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"
import { editable as e, SheetProvider } from "@theatre/r3f"

import Composer from "./composer"
import { Paris, Miyajima, Sintra, Berlin } from "../components/planets"
import { colors } from "../models"

const demoSheet = core.getProject("Demo Project").sheet("Demo Sheet")

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.blue};
  position: fixed;
  top: 0;
`

const CanvasComponent = () => {
  const [shaderState, setShadersState] = useState({
    hueSaturation: {
      hue: 0,
      saturation: 0,
    },
  })
  useEffect(() => {
    studio.initialize()

    const shaders = demoSheet.object("Shaders", {
      hueSaturation: {
        hue: core.types.number(0, { range: [0, 1] }),
        saturation: core.types.number(0, { range: [-5, 5] }),
      },
    })

    shaders.onValuesChange(state => {
      setShadersState(state)
    })

    studio.extend(extension)
  }, [])

  return (
    <Wrapper>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: NoToneMapping,
          preserveDrawingBuffer: true,
        }}
        linear
      >
        <SheetProvider sheet={demoSheet}>
          <Composer shadersState={shaderState} />
          <Suspense fallback={null}>{/* <Sintra /> */}</Suspense>
          <Suspense fallback={null}>
            <Paris />
          </Suspense>
          <Suspense fallback={null}>
            <Miyajima />
          </Suspense>
        </SheetProvider>
      </Canvas>
    </Wrapper>
  )
}

export default CanvasComponent
