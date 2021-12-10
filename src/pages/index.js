import React, { useState } from "react"
import { createGlobalStyle } from "styled-components"
import Seo from "../components/Nav/Seo"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import "../fonts/styles.css"
import Projects from "../components/Projects/Projects"
import Footer from "../components/Footer/Footer"
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch"

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

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${props => (props.dark ? "white" : "#17181c")};
    font-family: "AK1", sans-serif;
    -webkit-font-smoothing: antialiased;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    margin: 0;
    background-color: ${props => (props.dark ? "#17181c" : "white")};
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => (props.dark ? "white" : "#17181c")};
    border-radius: 5px;
  }
`

const IndexPage = () => {
  const [dark, setDark] = useState(true)
  function toggleDark() {
    setDark(!dark)
  }
  return (
    <>
      <GlobalStyle dark={dark} />
      <Seo
        description=""
        lang="en"
        meta={meta}
        title="Jake Slone | Portfolio"
      />
      <ThemeSwitch onClick={toggleDark} dark={dark} />
      <Nav dark={dark} />
      <Hero dark={dark} />
      <Projects dark={dark} />
      <Footer dark={dark} />
    </>
  )
}

export default IndexPage
