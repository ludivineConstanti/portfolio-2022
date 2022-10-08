import { useEffect, useMemo } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { HueSaturationShader } from "three/examples/jsm/shaders/HueSaturationShader.js"
import { PixelShader } from "three/examples/jsm/shaders/PixelShader.js"
import * as THREE from "three"

interface ComposerProps {
  shadersState: {
    pixel: { pixelSize: number }
    hueSaturation: { hue: number; saturation: number }
  }
  pixelSize: number
  hue: number
  saturation: number
}

const Composer = ({
  shadersState,
  pixelSize,
  hue,
  saturation,
}: ComposerProps) => {
  const { gl, scene, camera, size } = useThree()

  const shaders = useMemo(() => {
    const pixel = new ShaderPass(PixelShader)
    pixel.uniforms["resolution"].value = new THREE.Vector2(
      size.width,
      size.height
    )
    pixel.uniforms["resolution"].value.multiplyScalar(window.devicePixelRatio)
    pixel.uniforms["pixelSize"].value = 1
    return {
      hueSaturation: new ShaderPass(HueSaturationShader),
      pixel,
    }
  }, [])

  const composer = useMemo(() => {
    const renderScene = new RenderPass(scene, camera)
    const comp = new EffectComposer(gl)
    comp.addPass(renderScene)
    comp.addPass(shaders.hueSaturation)
    comp.addPass(shaders.pixel)
    return comp
  }, [])

  /* useEffect(() => {
    const { hue, saturation } = shadersState.hueSaturation
    shaders.hueSaturation.uniforms["hue"].value = hue
    shaders.hueSaturation.uniforms["saturation"].value = saturation
    const { pixelSize } = shadersState.pixel
    shaders.pixel.uniforms["pixelSize"].value = pixelSize
  }, [shadersState]) */

  useEffect(() => {
    shaders.hueSaturation.uniforms["hue"].value = hue
  }, [hue])

  useEffect(() => {
    shaders.hueSaturation.uniforms["saturation"].value = saturation
  }, [saturation])

  useEffect(() => {
    shaders.pixel.uniforms["pixelSize"].value = pixelSize
  }, [pixelSize])

  useEffect(() => {
    shaders.pixel.uniforms["resolution"].value = new THREE.Vector2(
      size.width,
      size.height
    )
    shaders.pixel.uniforms["resolution"].value.multiplyScalar(
      window.devicePixelRatio
    )
  }, [size])

  return useFrame(() => {
    composer.render()
  }, 1)
}

export default Composer
