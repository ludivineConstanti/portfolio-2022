import { useEffect, useMemo } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { HueSaturationShader } from "three/examples/jsm/shaders/HueSaturationShader.js"

interface ComposerProps {
  shadersState: { hueSaturation: { hue: number; saturation: number } }
}

const Composer = ({ shadersState }: ComposerProps) => {
  const { gl, scene, camera } = useThree()

  const effectHueSaturation = useMemo(
    () => new ShaderPass(HueSaturationShader),
    []
  )

  const composer = useMemo(() => {
    const renderScene = new RenderPass(scene, camera)
    const comp = new EffectComposer(gl)
    comp.addPass(renderScene)

    comp.addPass(effectHueSaturation)
    return comp
  }, [shadersState])

  useEffect(() => {
    const { hue, saturation } = shadersState.hueSaturation
    effectHueSaturation.uniforms["hue"].value = hue
    effectHueSaturation.uniforms["saturation"].value = saturation
  }, [shadersState])

  return useFrame(() => {
    composer.render()
  }, 1)
}

export default Composer
