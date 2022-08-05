import React from "react"
import styled from "styled-components"

import { colors } from "../../models"

const Wrapper = styled.nav`
  position: fixed;
  height: 20px;
  width: 20px;
  top: 20px;
  left: 20px;
  border: 3px solid ${colors.white};
`

const Menu = () => {
  return <Wrapper></Wrapper>
}

export default Menu
