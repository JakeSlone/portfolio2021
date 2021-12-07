import * as React from "react"
import Seo from "../components/Nav/Seo"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import "../fonts/styles.css"
import Projects from "../components/Projects/Projects"
import Footer from "../components/Footer/Footer"

const meta = [
  {
    name: `description`,
    content: "A development portfolio site by Jake Slone.",
  },
  {
    property: `og:description`,
    content: "A development portfolio site by Jake Slone.",
  },
  {
    property: `og:type`,
    content: `website`,
  },
]

const IndexPage = () => (
  <>
    <Seo description="" lang="en" meta={meta} title="Jake Slone | Portfolio" />
    <Nav />
    <Hero />
    <Projects />
    <Footer />
  </>
)

export default IndexPage
