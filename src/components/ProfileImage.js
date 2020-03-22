import React from "react"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import COLORS from "../constants/colors"

const Profile = styled(GatsbyImage)`
  border-radius: 50%;
  width: 160px;
  border: 5px solid ${COLORS.paper};
  align-self: center;
  margin: 2rem auto;
  box-shadow: 1px 2px 6px 1px ${COLORS.shadow};
  @media (min-width: 769px) {
    position: absolute !important;
    right: 3rem;
    top: 1rem;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Profile fluid={data.placeholderImage.childImageSharp.fluid} />
}
