import React from "react"
import styled from "styled-components"

const Wrapper = styled.a`
  height: 100%;
`

interface IconWrapperProps {
  path: string
  children: JSX.Element
}

const IconWrapper = ({ path, children }: IconWrapperProps) => (
  <Wrapper href={path} target="_blank">
    {children}
  </Wrapper>
)

export default IconWrapper
