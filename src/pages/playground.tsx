import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PlanetParis from "../components/PlanetParis"

const PlaygroundPage = () => (
  <Layout canScroll={false}>
    <Seo title="Playground" />
    <PlanetParis />
  </Layout>
)

export default PlaygroundPage
