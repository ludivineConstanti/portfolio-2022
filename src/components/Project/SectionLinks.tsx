import React from "react"
import styled from "styled-components"

import { IconGithub } from "../icons"
import { colors, bodyFontStyle } from "../../models"

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 40px;
`

const IconWrapper = styled.div`
  height: 40px;
  margin-right: 20px;
`

const Text = styled.p`
  ${bodyFontStyle}
`

interface WebsiteLinkProps {
  text: string
  icon: JSX.Element
}

const WebsiteLink = ({ text, icon }: WebsiteLinkProps) => {
  return (
    <LinkWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Text>{text}</Text>
    </LinkWrapper>
  )
}

const LinksWrapper = styled.div`
  display: flex;
  // padding-top: 40px;
  // padding-bottom: 40px;
  padding-left: 80px;
  display: flex;
  // border-top: 5px solid ${colors.white};
  // border-bottom: 5px solid ${colors.white};
  div:last-child {
    margin-bottom: 0;
  }
`

const ProjectDescription = styled.p`
  ${bodyFontStyle}
  padding: 80px;
  padding-top: 40px;
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
