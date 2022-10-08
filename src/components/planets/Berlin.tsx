import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { editable as e } from "@theatre/r3f"

import {
  MaterialGreen,
  MaterialWhite,
  MaterialWater,
  MaterialGlass,
  MaterialBlue,
  MaterialYellow,
} from "../materials"

const Berlin = () => {
  const { nodes } = useGLTF("/planets/berlin.gltf")

  const ref: null | { current: THREE.Mesh } = useRef()

  useFrame(() => {
    if (ref) {
      const x = ref.current.rotation.x + 0.0005
      const y = ref.current.rotation.y + 0.002
      const z = ref.current.rotation.z + 0.0005
      ref.current.rotation.set(x, y, z)
    }
  })
  return (
    <e.group dispose={null} theatreKey="Planet Berlin">
      <group position={[0, -65, -40]} scale={13} ref={ref}>
        <mesh geometry={nodes.glassBlueLight.geometry}>
          <MaterialGlass.blueLight />
        </mesh>
        <mesh geometry={nodes.glassGreen.geometry}>
          <MaterialGreen />
        </mesh>
        <mesh geometry={nodes.water.geometry}>
          <MaterialWater />
        </mesh>
        <mesh geometry={nodes.yellow.geometry}>
          <MaterialYellow />
        </mesh>
        <mesh geometry={nodes.blue.geometry}>
          <MaterialBlue />
        </mesh>
        <mesh geometry={nodes.glassBlueDark.geometry}>
          <MaterialGlass.blueDark />
        </mesh>
        <mesh geometry={nodes.glassWhite.geometry}>
          <MaterialGlass.white />
        </mesh>
        <mesh geometry={nodes.green.geometry}>
          <MaterialGreen />
        </mesh>
        <mesh geometry={nodes.white.geometry}>
          <MaterialWhite />
        </mesh>
        <mesh geometry={nodes.glassBlue.geometry}>
          <MaterialGlass.blue />
        </mesh>
      </group>
    </e.group>
  )
}

// useGLTF.preload("/berlin.gltf")

export default Berlin
