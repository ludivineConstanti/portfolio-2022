import React from "react"
import styled from "styled-components"

import { h1FonstStyle } from "../../models"
import SectionTechnos from "./SectionTechnos"
import SectionLinks from "./SectionLinks"
import { BackgroundColor, Wrapper } from "../basics"

const StyledBackgroundColor = styled(BackgroundColor)`
  height: 50vh;
`

const Title = styled.h1`
  ${h1FonstStyle}
`

interface PropjectProps {
  title: string
  text: string
  setRef: React.Dispatch<any>
}

const Project = ({ title, text, setRef }: PropjectProps) => {
  return (
    <Wrapper ref={e => setRef(e)}>
      <StyledBackgroundColor />
      <Title>{title}</Title>
      <SectionLinks text={text} />
      <SectionTechnos />
      <StyledBackgroundColor />
    </Wrapper>
  )
}

export default Project
