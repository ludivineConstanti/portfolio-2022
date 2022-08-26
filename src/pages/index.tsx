import React, { Suspense } from "react"
import styled from "styled-components"
import { Canvas } from "@react-three/fiber"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Paris, Miyajima } from "../components/planets"
import Project from "../components/Project"
import { zIndex, colors } from "../models"

const CanvasWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colors.blue};
  position: fixed;
  top: 0;
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
    <CanvasWrapper>
      <Canvas>
        <Suspense fallback={null}>
          <Paris />
        </Suspense>
        <Suspense fallback={null}>
          <Miyajima />
        </Suspense>
      </Canvas>
    </CanvasWrapper>
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
