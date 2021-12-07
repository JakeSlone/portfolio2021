import React from "react"
import { Wrapper } from "./Footer.styles"
import arrow from "../../images/arrow.png"

const Footer = () => {
  function scrollToTop() {
    setTimeout(function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
    console.log("ran")
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="tag">21 - JS &copy;</div>
        <div
          className="to-top"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
          role="button"
          tabIndex={0}
        >
          Back to top <img src={arrow} alt="arrow icon"></img>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
