import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PlanetParis from "../components/PlanetParis"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PlanetParis />
  </Layout>
)

export default IndexPage
