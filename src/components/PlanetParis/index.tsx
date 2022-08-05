import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import { init, cancelLoop, handleWindowResize } from "./scene"
import { zIndex } from "../../models"

const Wrapper = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.background};
`

const PlanetParis = () => {
  const container = useRef()
  useEffect(() => {
    init(container.current)
    return () => {
      cancelLoop()
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])
  return <Wrapper ref={container} style={{ display: "block" }} />
}

export default PlanetParis
