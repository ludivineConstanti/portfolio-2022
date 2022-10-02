import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Canvas from "../components/canvas"
import Project from "../components/Project"
import { zIndex, colors } from "../models"

const IntroWrapper = styled.div`
  z-index: ${zIndex.content};
  position: relative;
  height: 30vw;
  width: 30vw;
  margin-left: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colors.white};
  padding: 50px;
  // background-color: rgba(255, 255, 255, 0.5);
  border-radius: 500px;
  margin-top: 100px;
`

const Title = styled.h1`
  font-size: 75px;
  margin-bottom: 15px;
`

const Text = styled.p`
  font-size: 20px;
  // text-align: center;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <BackgroundColor /> */}
    <Canvas />
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
  </Layout>
)

export default IndexPage
