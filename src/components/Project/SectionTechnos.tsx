import React from "react"
import styled from "styled-components"

import { IconReact, IconTypescript, IconRedux, IconGatsby } from "../icons"
import { colors, buttonFontStyle } from "../../models"

const TechnoWrapper = styled.div`
  ${buttonFontStyle}
  height: 40px;
  border: 2.5px solid ${colors.white};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  flex-shrink: 1;
  margin: 10px;
`

const TechnoName = styled.p`
  padding-top: 10px;
`

interface TechnoIconProps {
  text: string
  icon: JSX.Element
}

const TechnoIcon = ({ text, icon }: TechnoIconProps) => {
  return <TechnoWrapper>{icon}</TechnoWrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`

const Title = styled.h2`
  padding-bottom: 20px;
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 4px;
`

const TechnosWrapper = styled.div`
  display: flex;
`

const SectionTechnos = () => {
  return (
    <Wrapper>
      <Title>tech stack:</Title>
      <TechnosWrapper>
        <TechnoIcon text="React" icon={<IconReact />} />
        <TechnoIcon text="Typescript" icon={<IconTypescript />} />
        <TechnoIcon text="Gatsby" icon={<IconGatsby />} />
        <TechnoIcon text="Redux" icon={<IconRedux />} />
        <TechnoIcon text="" icon={<IconRedux />} />
      </TechnosWrapper>
    </Wrapper>
  )
}

export default SectionTechnos
