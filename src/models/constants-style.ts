import { css } from "styled-components"
import { colors } from "./constants"

export const h1FonstStyle = css`
  font-size: 75px;
  line-height: 70px;
  border-top: 5px solid ${colors.white};
  border-bottom: 5px solid ${colors.white};
  padding: 15px 0 15px 80px;
`

export const bodyFontStyle = css`
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 22px;
`

export const menuFontStyle = css`
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 22px;
`
export const buttonFontStyle = css`
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
`

export const unselectableStyle = css`
  pointer-events: none;
  user-drag: none;
  user-select: none;
`
