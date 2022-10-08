import React from "react"
import styled from "styled-components"

import { IconGithub } from "../icons"
import { colors, bodyFontStyle, buttonFontStyle } from "../../models"

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2.5px solid ${colors.white};
  padding: 20px;
  margin-right: 20px;
  cursor: pointer;
`

const IconWrapper = styled.div`
  height: 40px;
  margin-right: 20px;
`

const Text = styled.p`
  ${buttonFontStyle}
`

const Arrow = styled.span`
  font-size: 20px;
  position: relative;
  top: 0.05em;
  margin-left: 5px;
`

// → ↦ ⇒ ⇛ ⇨

interface WebsiteLinkProps {
  text: string
  icon: JSX.Element
}

const WebsiteLink = ({ text, icon }: WebsiteLinkProps) => {
  return (
    <LinkWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Text>
        {text}
        <Arrow>⇨</Arrow>
      </Text>
    </LinkWrapper>
  )
}

const LinksWrapper = styled.div`
  display: flex;
  padding-left: 80px;
  display: flex;
  div:last-child {
    margin-bottom: 0;
  }
`

const ProjectDescription = styled.p`
  ${bodyFontStyle}
  padding: 40px 80px;
  background-color: ${colors.blue};
`

interface SectionLinksProps {
  text: string
}

const SectionLinks = ({ text }: SectionLinksProps) => {
  return (
    <>
      <ProjectDescription>{text}</ProjectDescription>
      <LinksWrapper>
        <WebsiteLink text="Code" icon={<IconGithub />} />
        <WebsiteLink text="Website" icon={<IconGithub />} />
      </LinksWrapper>
    </>
  )
}

export default SectionLinks
