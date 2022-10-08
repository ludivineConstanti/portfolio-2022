import * as React from "react"

import GlobalStyle from "./globalStyle"
import Menu from "./Menu"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  canScroll?: boolean
  onWheel?: () => void
}

const Layout = ({ children, canScroll = true, onWheel }: LayoutProps) => {
  return (
    <main
      onWheel={() => {
        if (onWheel) {
          onWheel()
        }
      }}
    >
      <GlobalStyle canscroll={canScroll} />
      {children}
      {/* <Menu /> */}
    </main>
  )
}

export default Layout
