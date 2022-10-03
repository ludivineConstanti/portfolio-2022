import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Canvas from "../components/canvas"
import Project from "../components/Project"
import { zIndex, colors, h1FonstStyle, bodyFontStyle } from "../models"
import { BackgroundColor } from "../components/basics"

const IntroWrapper = styled.div`
  z-index: ${zIndex.content};
  position: relative;
  height: 100vh;
  width: 40vw;
  margin-left: 60vw;
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  box-sizing: border-box;
  border-left: 5px solid ${colors.white};
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

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <BackgroundColor /> */}
    <Canvas />
    <IntroWrapper>
      <BackgroundColor />
      <Title>Welcome!</Title>
      <Text>
        My name is Ludivine Constanti, I am currently working as a developer.
        You can scroll down, to see some projects that I worked on.
      </Text>
    </IntroWrapper>
    <Project
      title="Pixiji"
      text="This project is an interactive quiz that aims to help people studying
        kanjis (japanese characters)."
    />
    <Project
      title="Heavens of mankind"
      text="This is a website which informs people about the constellations. A tool made with three.js allows you to interact with the stars."
    />
  </Layout>
)

export default IndexPage
