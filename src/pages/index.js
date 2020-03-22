import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import GREETINGS from '../constants/greetings'
import { getTimeOfDay } from "../utils/time"

const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: 300;
`

const B = styled.span`
  font-weight: 700;
`

const getTimeBasedGreeting = () => GREETINGS[getTimeOfDay()]

export default () => (
  <Layout>
    <SEO title="Ville Pelkonen | Software Development & Consultancy" />
    <span>{getTimeBasedGreeting()}, I'm</span>
    <Title>Ville Pelkonen</Title>
    <p></p>
    <p>I craft sites and apps for the web and beyond</p>
    <p>
      in <B>Helsinki</B> mainly with <B>JavaScript</B>, <B>React</B>, <B>React Native</B>,{" "}
      <B>Redux</B>, <B>Gatsby</B> and <B>Netlify</B>.
    </p>
    <section>
      <p>
        I have <B>6+ years of experience</B> in frontend and mobile development.
        I write clean and tested code, have my CIs and CDs under control, build
        accessible user interfaces, and focus on making data useful.
      </p>
      <p>
        At the moment I work as a <B>Senior Software Engineer</B> and{" "}
        <B>Web Tech Lead</B> at <a href="https://qvik.com">Qvik</a>. During my
        career, I've working for clients such as <B>Microsoft</B>, <B>Yle</B>{" "}
        and <B>St1</B>.
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
          <a href="mailto:vepelkonen@gmail.com">vepelkonen@gmail.com</a>
        </li>
        <li>
          <B>GitHub:</B> <a href="https://github.com/vpelkonen">vpelkonen</a>
        </li>
        <li>
          <B>LinkedIn:</B>{" "}
          <a href="https://linkedin.com/in/vpelkonen">vpelkonen</a>
        </li>
        <li>
          <B>Twitter:</B> <a href="https://twitter.com/perukonen">perukonen</a>
        </li>
      </ul>
    </section>
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
