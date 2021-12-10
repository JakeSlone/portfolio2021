import React, { useState, useEffect, useCallback } from "react"
import { Wrapper } from "./Nav.styles"
import Progress from "./Progress"

const Nav = ({ dark }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    )

    setPrevScrollPos(currentScrollPos)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const scrollToContact = e => {
    e.preventDefault()
    setTimeout(function () {
      window.scrollTo({
        top: 400,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  const scrollToProjects = e => {
    e.preventDefault()
    setTimeout(function () {
      window.scrollTo({
        top: 800,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  return (
    <Wrapper visible={visible} dark={dark}>
      <div
        className="container"
        data-sal="fade"
        data-sal-delay="200"
        data-sal-easing="ease"
      >
        <div className="logo-container">
          <a href="/" className="logo">
            Slone.ca
          </a>
        </div>
        <div className="items">
          <a
            onClick={scrollToContact}
            onKeyDown={scrollToContact}
            role="button"
            tabIndex={0}
            href="javascript;"
          >
            Contact
          </a>
          <span>&bull;</span>
          <a
            onClick={scrollToProjects}
            onKeyDown={scrollToProjects}
            role="button"
            tabIndex={0}
            href="javascript;"
          >
            Projects
          </a>
        </div>
        <Progress dark={dark} />
      </div>
    </Wrapper>
  )
}

export default Nav
