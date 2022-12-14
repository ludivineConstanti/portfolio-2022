import React from "react"

import { colors } from "../../../models"

const IconReact = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    viewBox="-11.5 -10.23174 23 20.46348"
  >
    <circle cx="0" cy="0" r="2.05" fill={colors.white} />
    <g stroke={colors.white} stroke-width="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

export default IconReact
