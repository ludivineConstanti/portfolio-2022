/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { editable as e } from "@theatre/r3f"

import {
  MaterialBlue,
  MaterialGlass,
  MaterialYellow,
  MaterialGreen,
  MaterialRed,
  MaterialWater,
  MaterialWhite,
} from "../materials"

const Sintra = () => {
  const { nodes } = useGLTF("/planets/sintra.gltf")

  const ref: null | { current: THREE.Mesh } = useRef()

  useFrame(() => {
    if (ref) {
      const x = ref.current.rotation.x + 0.0005
      const y = ref.current.rotation.y + 0.002
      const z = ref.current.rotation.z + 0.0005
      ref.current.rotation.set(0, y, 0)
    }
  })
  return (
    <e.group dispose={null} scale={2} ref={ref} theatreKey="Planet Sintra">
      <mesh geometry={nodes.glassDarkBlue.geometry}>
        <MaterialGlass.blueDark />
      </mesh>
      <mesh geometry={nodes.glassRed.geometry}>
        <MaterialGlass.red />
      </mesh>
      <mesh geometry={nodes.blue.geometry}>
        <MaterialBlue />
      </mesh>
      <mesh geometry={nodes.water.geometry}>
        <MaterialWater />
      </mesh>
      <mesh geometry={nodes.glassGreen.geometry}>
        <MaterialGlass.green />
      </mesh>
      <mesh geometry={nodes.yellow.geometry}>
        <MaterialYellow />
      </mesh>
      <mesh geometry={nodes.glassWhite.geometry}>
        <MaterialGlass.white />
      </mesh>
      <mesh geometry={nodes.white.geometry}>
        <MaterialWhite />
      </mesh>
      <mesh geometry={nodes.green.geometry}>
        <MaterialGreen />
      </mesh>
      <mesh geometry={nodes.red.geometry}>
        <MaterialRed />
      </mesh>
    </e.group>
  )
}

// useGLTF.preload('/sintra.gltf')

export default Sintra
