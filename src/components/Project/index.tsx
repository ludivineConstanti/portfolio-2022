import React from "react"
import styled from "styled-components"

import { IconGithub } from "../icons"
import { colors, zIndex } from "../../models"
import SectionTechnos from "./SectionTechnos"
import SectionLinks from "./SectionLinks"

const Wrapper = styled.div`
  position: relative;
  z-index: ${zIndex.content};
  color: ${colors.white};
  width: 50vw;
  margin: 75vh auto;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 80px;
  border-radius: 40px;
  // padding: 50px;
  filter: drop-shadow(0px 0px 30px ${colors.blue});
`

const Title = styled.h1`
  font-size: 120px;
  // display: inline;
  padding-bottom: 20px;
  // margin-bottom: 40px;
`

const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.blue};
  opacity: 0.35;
  z-index: -1;
  border-radius: 40px;
`

interface PropjectProps {
  title: string
  text: string
}

const Project = ({ title, text }: PropjectProps) => {
  return (
    <Wrapper>
      <BackgroundColor />
      <Title>{title}</Title>
      <SectionLinks text={text} />
      <SectionTechnos />
    </Wrapper>
  )
}

export default Project
