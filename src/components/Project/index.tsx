import React from "react"
import styled from "styled-components"

import { colors, zIndex, h1FonstStyle } from "../../models"
import SectionTechnos from "./SectionTechnos"
import SectionLinks from "./SectionLinks"
import { BackgroundColor } from "../basics"

const StyledBackgroundColor = styled(BackgroundColor)`
  height: 25vh;
`

const Wrapper = styled.div`
  position: relative;
  z-index: ${zIndex.content};
  color: ${colors.white};
  width: 50vw;
  margin-left: 60vw;
  width: 40vw;
  // background-color: ${colors.blue};
  border-left: 5px solid ${colors.white};
`

const Title = styled.h1`
  ${h1FonstStyle}
`

interface PropjectProps {
  title: string
  text: string
}

const Project = ({ title, text }: PropjectProps) => {
  return (
    <Wrapper>
      <StyledBackgroundColor />
      <Title>{title}</Title>
      <SectionLinks text={text} />
      <SectionTechnos />
      <StyledBackgroundColor />
    </Wrapper>
  )
}

export default Project
