import React, { useState } from "react"
import styled from "styled-components"
import { scaleLinear } from "d3-scale"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Canvas from "../components/canvas"
import Project from "../components/Project"
import {
  colors,
  h1FonstStyle,
  bodyFontStyle,
  menuFontStyle,
  unselectableStyle,
} from "../models"
import { BackgroundColor, Wrapper } from "../components/basics"

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  border-bottom: 2.5px solid ${colors.white};
  background-color: ${colors.blue};
  width: 40vw;
  right: 0;
  color: ${colors.white};
  box-sizing: border-box;
  ${menuFontStyle}
  display: flex;
`

const MenuItem = styled.div`
  padding: 15px;
  border-right: 2.5px solid ${colors.white};
`

const IntroWrapper = styled(Wrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  ${h1FonstStyle}
`

const Text = styled.p`
  ${bodyFontStyle}
  padding: 40px 80px;
  background-color: ${colors.blue};
  flex-grow: 1;
`

const Filter = styled.div`
  ${unselectableStyle}
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000000;
  filter: hue-rotate(0);
`

const returnPercent = ({ top, height }: { top: number; height: number }) => {
  if (window) {
    const percent = (-(top - window.innerHeight / 2) / height) * 100
    return Math.max(Math.min(100, percent), 0)
  }
  return 0
}

const scalePixel = scaleLinear([0, 50, 100], [1, 35, 1])
const scaleHue = scaleLinear([0, 50, 100], [0, 0.247, 0])
const scaleSaturation = scaleLinear([0, 50, 100], [0, 0.19, 0])

const IndexPage = () => {
  const [refPixiji, setRefPixiji] = useState(null)
  const [refSternenhimmel, setRefSternenhimmel] = useState(null)
  const [pixelSize, setPixelSize] = useState(1)
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)

  return (
    <Layout
      onWheel={() => {
        if (window) {
          const boundsPixiji = refPixiji.getBoundingClientRect()
          setPixelSize(Math.round(scalePixel(returnPercent(boundsPixiji))))

          const boundsSternenhimmel = refSternenhimmel.getBoundingClientRect()
          setHue(scaleHue(returnPercent(boundsSternenhimmel)))
          setSaturation(scaleSaturation(returnPercent(boundsSternenhimmel)))
        }
      }}
    >
      <Seo title="Home" />
      {/* <BackgroundColor /> */}
      <Canvas pixelSize={pixelSize} hue={hue} saturation={saturation} />

      <IntroWrapper>
        <BackgroundColor />
        <Title>Welcome!</Title>
        <Text>
          My name is Ludivine Constanti, I am a developer, with professional
          experience in Art Direction.
          <br />
          <br />
          Scroll down to see my projects.
        </Text>
      </IntroWrapper>
      <Project
        setRef={setRefPixiji}
        title="Pixiji"
        text="This project explores the combination of kanjis (Japanese characters) and pixel art. The user can can play various quizzes and see an illustration come to life with each correct answer."
      />
      <Project
        setRef={setRefSternenhimmel}
        title="Sternen­himmel der mensch­heit"
        text="This website is a recollection of human knowledge and their stories about the stars. It contains an interactive 3D tool, which visualises different constellations, based on which culture the user selects."
      />
      <MenuWrapper>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Articles</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuWrapper>
      {/* <Filter /> */}
    </Layout>
  )
}

export default IndexPage
