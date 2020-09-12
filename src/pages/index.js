import React from "react"
import { graphql } from "gatsby"
import { Heading, Flex, Box } from "@chakra-ui/core";
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Heading>Noah Watkins, Director</Heading>
    <Flex justifyContent="space-between">
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </Flex>
    <Box size="sm">
      <p>Test</p>
      <Img
        fluid={data.noahSuit.childImageSharp.fluid}
        alt="Noah in a suit"
      />
    </Box>
  </Layout>
)

export const query = graphql`
  {
    noahSuit: file(relativePath: {eq: "noah-suit.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
