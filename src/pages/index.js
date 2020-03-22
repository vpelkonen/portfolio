import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import GREETINGS from '../constants/greetings'

const Bold = styled.span`
  font-weight: 700;
`

const getTimeBasedGreeting = () => {
  const hour = new Date().getHours()
  if (hour <= 5) {
    return GREETINGS.night
  }
  if (hour >= 6 && hour < 12) {
    return GREETINGS.morning
  }
  if (hour >= 12 && hour < 19) {
    return GREETINGS.afternoon
  }
  return GREETINGS.evening
}

export default () => (
  <Layout>
    <SEO title="Ville Pelkonen | Software Development & Consultancy" />
    <Bold>{getTimeBasedGreeting()}, I'm</Bold>
    <h1>Ville Pelkonen, </h1>
    <p>a Helsinki-based software engineer.</p>
    <p>I craft sites and apps for the web and beyond.</p>
    <p>
      Currently, I do that with <Bold>React</Bold> and <Bold>React Native</Bold>
      . I also like e.g. <Bold>TypeScript</Bold>, <Bold>Gatsby</Bold> and{" "}
      <Bold>Netlify</Bold>, and have 6+ years of experience from various
      technologies. I write clean and tested code, have my CIs and CDs under
      control, build accessible user interfaces, and focus on making data
      useful.
    </p>
    <p>
      At the moment I work as a <Bold>Senior Software Engineer</Bold> and{" "}
      <Bold>Web Tech Lead</Bold> at <a href="https://qvik.com">Qvik</a>.
    </p>
    <p>
      During my career, I've working for clients such as <Bold>Microsoft</Bold>,{" "}
      <Bold>Yle</Bold> and <Bold>St1</Bold>.
    </p>
    <p>
      Besides my day job, I consult teams and companies in{" "}
      <Bold>accessibility</Bold>, <Bold>empathetic communication</Bold> and{" "}
      <Bold>agile project management</Bold>. I also speak about these topics in
      events.
    </p>
    <p>
      I’d be happy to help you in challenges related to the above! Let me know
      at <a href="mailto:vepelkonen@gmail.com">vepelkonen@gmail.com</a> and
      let’s take it further from there.
    </p>
    <a href="https://github.com/vpelkonen">GitHub</a>
    <a href="https://linkedin.com/in/vpelkonen">LinkedIn</a>
    <p>
      Check out{" "}
      <a href="https://2030.qvik.com" target="_blank" rel="noopener noreferrer">
        this interactive story
      </a>{" "}
      or{" "}
      <a
        href="https://github.com/vpelkonen/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        this website code
      </a>{" "}
      to see some of my public work.
    </p>
  </Layout>
)
