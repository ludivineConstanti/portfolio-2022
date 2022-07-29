/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import "./layout.css"
import GUI from "./GUI"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <GUI />
      {children}
    </main>
  )
}

export default Layout
