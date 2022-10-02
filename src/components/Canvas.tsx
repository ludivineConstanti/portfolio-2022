import React, { Suspense, useMemo, useEffect } from "react"
import styled from "styled-components"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { NoToneMapping } from "three"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { HueSaturationShader } from "three/examples/jsm/shaders/HueSaturationShader.js"

import { Paris, Miyajima, Sintra, Berlin } from "../components/planets"
import { colors } from "../models"

const Composer = () => {
  const { gl, scene, camera } = useThree()

  const composer = useMemo(() => {
    const renderScene = new RenderPass(scene, camera)
    const comp = new EffectComposer(gl)
    // comp.renderToScreen = false
    comp.addPass(renderScene)
    const effectHueSaturation = new ShaderPass(HueSaturationShader)
    effectHueSaturation.uniforms["hue"].value = 0.5
    effectHueSaturation.uniforms["saturation"].value = 0
    comp.addPass(effectHueSaturation)
    return comp
  }, [])

  return useFrame(() => {
    composer.render()
  }, 1)
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.blue};
  position: fixed;
  top: 0;
`

const CanvasComponent = () => {
  return (
    <Wrapper>
      <Canvas gl={{ antialias: true, toneMapping: NoToneMapping }} linear>
        <Composer />
        <Suspense fallback={null}>{/* <Sintra /> */}</Suspense>
        <Suspense fallback={null}>
          <Paris />
        </Suspense>
        <Suspense fallback={null}>
          <Miyajima />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

export default CanvasComponent
