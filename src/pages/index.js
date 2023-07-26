import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/HomeBackground"
import Main from "../components/Extras/Main"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Main />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Education"
      subtitle="Come to study With Us."
      styleClass="default-background"
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "home-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage