import React from "react"
import styled from "styled-components"

import { IconReact } from "../icons"
import { colors } from "../../models"

const TechnoWrapper = styled.div`
  height: 65px;
  border-right: 3px solid ${colors.white};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  flex-shrink: 1;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 4px;
  // margin-right: 15px;
`

const TechnoName = styled.p`
  padding-top: 10px;
`

interface TechnoIconProps {
  text: string
  icon: JSX.Element
}

const TechnoIcon = ({ text, icon }: TechnoIconProps) => {
  return (
    <TechnoWrapper>
      {icon}
      <TechnoName>{text}</TechnoName>
    </TechnoWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  padding-bottom: 20px;
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 4px;
`

const TechnosWrapper = styled.div`
  border: 5px solid ${colors.white};
  display: flex;
`

const SectionTechnos = () => {
  return (
    <Wrapper>
      <Title>tech stack:</Title>
      <TechnosWrapper>
        <TechnoIcon text="React" icon={<IconReact />} />
        <TechnoIcon text="Typescript" icon={<IconReact />} />
        <TechnoIcon text="Gatsby" icon={<IconReact />} />
        <TechnoIcon text="Redux" icon={<IconReact />} />
      </TechnosWrapper>
    </Wrapper>
  )
}

export default SectionTechnos
