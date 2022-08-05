import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PlanetParis from "../components/PlanetParis"
import Project from "../components/Project"
import { zIndex, colors } from "../models"

const BackgroundColor = styled.div`
  height: 100vh;
  background-color: ${colors.blue};
  position: fixed;
  top: 0;
  width: 50vw;
  left: 25vw;
  opacity: 0.5;
`

const IntroWrapper = styled.div`
  z-index: ${zIndex.content};
  position: relative;
  height: 100vh;
  width: 40vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`

const Title = styled.h1`
  font-size: 150px;
`

const Text = styled.p`
  font-size: 25px;
  // text-align: center;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <BackgroundColor /> */}
    <IntroWrapper>
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
      title="Sternenhimmel"
      text="This is a website which informs people about the constellations. A tool made with three.js allows you to interact with the stars."
    />
    <PlanetParis />
  </Layout>
)

export default IndexPage
