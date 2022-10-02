import * as React from "react"

import GlobalStyle from "./globalStyle"
import Menu from "./Menu"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  canScroll?: boolean
}

const Layout = ({ children, canScroll = true }: LayoutProps) => {
  return (
    <main>
      <GlobalStyle canscroll={canScroll} />
      {children}
      <Menu />
    </main>
  )
}

export default Layout
