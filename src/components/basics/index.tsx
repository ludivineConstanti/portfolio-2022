import styled from "styled-components"

import { colors, zIndex } from "../../models"

export const BackgroundColor = styled.div`
  background-color: ${colors.blue};
  width: 100%;
  flex-grow: 1;
`

export const Wrapper = styled.div`
  position: relative;
  z-index: ${zIndex.content};
  width: 40vw;
  margin-left: 60vw;
  color: ${colors.white};
  box-sizing: border-box;
  border-left: 5px solid ${colors.white};
`
