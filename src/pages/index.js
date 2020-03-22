import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LINKS from '../constants/links'

export default () => (
  <Layout>
    <SEO title="Ville Pelkonen | Software Development & Consultancy" />
    <h1>Hi, I'm Ville Pelkonen!</h1>
    <p>I craft sites and apps for the web and beyond.</p>
    <p>Currently I work with <span>React</span> and <span>React Native</span>. I also like e.g. <span>TypeScript</span>, <span>Gatsby</span> and <span>Netlify</span>, and have 7+ years of experience from various other technologies. I have my CIs and CDs under control and know my way around Google and Apple.</p>
    <p>At the moment I work as a <span>Senior Software Engineer</span> and <span>Web Tech Lead</span> at <a href={LINKS.qvik.url}>{LINKS.qvik.text}</a>.</p>
    <a href={LINKS.linkedIn.url}>{LINKS.linkedIn.text}</a>
    <a href={LINKS.gitHub.url}>{LINKS.gitHub.text}</a>
  </Layout>
)
