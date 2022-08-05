import React from "react"
import styled from "styled-components"

import { IconGithub } from "../icons"
import { colors } from "../../models"

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
  letter-spacing: 2px;
  line-height: 22px;
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
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  border-left: 3px solid ${colors.white};
  div:last-child {
    margin-bottom: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  border-top: 3px solid ${colors.white};
  border-bottom: 3px solid ${colors.white};
  margin-bottom: 40px;
`

const ProjectDescription = styled.p`
  margin-right: 20px;
  width: 65%;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 25px;
  padding-top: 40px;
`

interface SectionLinksProps {
  text: string
}

const SectionLinks = ({ text }: SectionLinksProps) => {
  return (
    <Wrapper>
      <ProjectDescription>{text}</ProjectDescription>
      <LinksWrapper>
        <WebsiteLink text="Look at the code" icon={<IconGithub />} />
        <WebsiteLink text="Look at the website" icon={<IconGithub />} />
      </LinksWrapper>
    </Wrapper>
  )
}

export default SectionLinks
