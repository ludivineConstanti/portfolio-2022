import React from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import Matcap from "./Matcap"
import MaterialGlassBlueBasic from "./MaterialGlassBlueBasic"

export const MaterialBlue = () => {
  const matcap = useLoader(TextureLoader, "matcaps/blue.jpg")
  return <Matcap matcap={matcap} color={"#457CE5"} />
}

export const MaterialGlassBlueLight = () => {
  return <MaterialGlassBlueBasic color={"#FFF"} />
}

export const MaterialGlassBlue = () => {
  return <MaterialGlassBlueBasic color={"#538AE6"} />
}

export const MaterialGlassBlueDark = () => {
  return <MaterialGlassBlueBasic color={"#4B73BC"} />
}

export const MaterialGlassWhite = () => {
  const matcap = useLoader(TextureLoader, "matcaps/glassWhite.jpg")
  return <Matcap matcap={matcap} color={"#FFF"} />
}

export const MaterialGreenLight = () => {
  const matcap = useLoader(TextureLoader, "matcaps/greenLight.jpg")
  return <Matcap matcap={matcap} color={"#9AE3CC"} />
}

export const MaterialPink = () => {
  const matcap = useLoader(TextureLoader, "matcaps/pink.jpg")
  return <Matcap matcap={matcap} color={"#FFABE4"} />
}

export const MaterialRed = () => {
  const matcap = useLoader(TextureLoader, "matcaps/pink.jpg")
  return <Matcap matcap={matcap} color={"#FFABE4"} />
}

export const MaterialWater = () => {
  const matcap = useLoader(TextureLoader, "matcaps/water.jpg")
  return <Matcap matcap={matcap} color={"#5F79A9"} />
}

export const MaterialWhite = () => {
  const matcap = useLoader(TextureLoader, "matcaps/white.jpg")
  return <Matcap matcap={matcap} color={"#FFF"} />
}
