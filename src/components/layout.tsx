/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import GlobalStyle from "./globalStyle"
import GUI from "./GUI"
import Menu from "./Menu"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  canScroll?: boolean
}

const Layout = ({ children, canScroll = true }: LayoutProps) => {
  return (
    <main>
      <GlobalStyle canscroll={canScroll} />
      <GUI />
      {children}
      <Menu />
    </main>
  )
}

export default Layout
