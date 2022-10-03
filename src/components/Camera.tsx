import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const transitionSpeed = 0.05

const Camera = () => {
  return useFrame(({ mouse, camera }) => {
    const cameraX = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 2,
      transitionSpeed
    )
    const cameraY = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 2,
      transitionSpeed
    )

    const cameraZ = camera.position.z

    camera.position.set(cameraX, cameraY, cameraZ)
  })
}

export default Camera
