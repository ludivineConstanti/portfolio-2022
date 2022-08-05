import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { links, colors } from "../../models"
import { IconLinkedin, IconBehance, IconInstagram, IconGithub } from "../icons"

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  border-left: 3px solid ${colors.white};
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 2.5vw;
  box-sizing: border-box;
`

const StyledLink = styled(Link)`
  color: ${colors.white};
  // margin: 0 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  font-size: 25px;
  text-transform: capitalize;
  padding-bottom: 20px;
  :hover {
    opacity: 0.8;
    border-bottom: 1px solid ${colors.white};
  }
`

const IconsWrapper = styled.div`
  display: flex;
  // flex-direction: column;
  // margin-left: 30px;
  // margin-right: 15px;
  // align-items: center;
  // justify-content: center;
  border-top: 3px solid ${colors.white};
`

const IconWrapper = styled.div`
  margin-top: 20px;
  height: 25px;
  width: 25px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 10px;
`

const Menu = () => {
  return (
    <Wrapper>
      <StyledLink to={links.home.path}>{links.home.text}</StyledLink>
      <StyledLink to={links.playground.path}>
        {links.playground.text}
      </StyledLink>
      <IconsWrapper>
        <IconWrapper>
          <IconLinkedin />
        </IconWrapper>
        <IconWrapper>
          <IconGithub />
        </IconWrapper>
        <IconWrapper>
          <IconBehance />
        </IconWrapper>
        <IconWrapper>
          <IconInstagram />
        </IconWrapper>
      </IconsWrapper>
    </Wrapper>
  )
}

export default Menu
