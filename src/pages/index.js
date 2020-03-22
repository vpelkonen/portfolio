import React from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"
import ProfileImage from '../components/ProfileImage'
import SEO from "../components/SEO"
import COLORS from "../constants/colors"
import GREETINGS from '../constants/greetings'
import TIMES from '../constants/times'
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

const Heart = styled.span`
  bottom: 2rem;
  left: 2rem;
  opacity: .5;
  transition: 150ms opacity;
  &:hover {
    opacity: 1.0;
  }
  @media (min-width: 769px) {
    position: absolute;
  }
`

const getTimeBasedGreeting = () => GREETINGS[getTimeOfDay()]

export default () => (
  <Layout>
    <SEO title="Ville Pelkonen | Software Development & Consultancy" />
    <ProfileImage />
    <B>{getTimeBasedGreeting()}, I'm</B>
    <Title>Ville Pelkonen</Title>
    <p></p>
    <p>I craft sites and apps for the web and beyond</p>
    <p>
      in <B>Helsinki</B> mainly with <B>JavaScript</B>, <B>React</B>,{" "}
      <B>React Native</B>, <B>Redux</B>, <B>Gatsby</B> and <B>Netlify</B>.
    </p>
    <section>
      <p>
        I have <B>6+ years of experience</B> in frontend and mobile development.
        I write clean and tested code, have my CIs and CDs under control, build
        accessible user interfaces, and focus on making data useful.
      </p>
      <p>
        At the moment I work as a <B>Senior Software Engineer</B> and{" "}
        <B>Web Tech Lead</B> at{" "}
        <ExternalLink href="https://qvik.com">Qvik</ExternalLink>. During my
        career, I've worked for clients such as <B>Microsoft</B>, <B>Yle</B> and{" "}
        <B>St1</B>.
      </p>
      <p>
        In addition, I consult teams and companies in <B>accessibility</B>,{" "}
        <B>empathic communication</B> and <B>agile project management</B>. I
        also speak in events.
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
        <li>
          <B>Twitter:</B>{" "}
          <ExternalLink href="https://twitter.com/perukonen">
            @perukonen
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
    <Heart>{getTimeOfDay() === TIMES.night ? "❤️" : "🖤"}</Heart>
  </Layout>
)
