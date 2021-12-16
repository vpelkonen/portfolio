import React from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"
import ProfileImage from '../components/ProfileImage'
import SEO from "../components/SEO"
import COLORS from "../constants/colors"
import GREETINGS from '../constants/greetings'
import { getTimeOfDay } from "../utils/time"

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Roboto Slab", serif;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const B = styled.span`
  font-weight: 700;
`

const ExternalLink = styled.a`
  color: ${COLORS.ocean};
  outline: none;
  &:focus, &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: ${COLORS.ocean};
  }
`

const getTimeBasedGreeting = () => GREETINGS[getTimeOfDay()]

export default () => (
  <Layout>
    <SEO />
    <ProfileImage />
    <B>{getTimeBasedGreeting()}, I'm</B>
    <Title>Ville Pelkonen</Title>
    <p></p>
    <p>I craft sites and apps for the web and beyond.</p>
    <p>
      My deep expertise lies in <B>TypeScript</B>, <B>React</B> and <B>React Native</B>, but there's plenty more I can handle in the way of frontend and fullstack development.
    </p>
    <section>
      <p>
        I have <B>8+ years of experience</B> in creating software. 1M+ users enjoy apps directly influenced by my code and project guidance.
        I write clean and tested code, have my CIs and CDs under control, build
        accessible user interfaces, handle user experience with utmost care, and focus on making data useful.
      </p>
      <p>
        At the moment I work as a <B>Senior Software Engineer</B> and
        <B> partner</B> at
        <ExternalLink href="https://luotocompany.com"> Luoto Company</ExternalLink>, in
        <B> Helsinki</B>. During my career, I've worked for clients such as
        <B> Microsoft</B>, <B>Yle</B> and <B>St1</B>.
      </p>
      <p>
        In addition, I consult teams and companies in <B>accessibility</B>,{" "}
        <B>empathetic communication</B> and <B>agile project management</B>. I
        also occasionally speak in events.
      </p>
    </section>
    <section>
      <p>If you have challenges related to the above, let me know:</p>
      <ul>
        <li>
          <B>Email:</B>{" "}
          <ExternalLink href="mailto:vepelkonen@gmail.com">
            vepelkonen@gmail.com
          </ExternalLink>
        </li>
        <li>
          <B>GitHub:</B>{" "}
          <ExternalLink href="https://github.com/vpelkonen">
            vpelkonen
          </ExternalLink>
        </li>
        <li>
          <B>LinkedIn:</B>{" "}
          <ExternalLink href="https://linkedin.com/in/vpelkonen">
            vpelkonen
          </ExternalLink>
        </li>
      </ul>
    </section>
    <p>
      Check out{" "}
      <ExternalLink
        href="https://2030.qvik.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        this interactive story
      </ExternalLink>{" "}
      or{" "}
      <ExternalLink
        href="https://github.com/vpelkonen/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        this website code
      </ExternalLink>{" "}
      to see some of my public work.
    </p>
  </Layout>
)
