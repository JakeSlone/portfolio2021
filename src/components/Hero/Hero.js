import React, { useState } from "react"
import { Wrapper } from "./Hero.styles"
import calgs from "../../images/calgs.png"
import link from "../../images/link.svg"

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText("jake@slone.ca")
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Wrapper>
      <div
        className="container"
        data-sal="fade"
        data-sal-delay="400"
        data-sal-easing="ease"
      >
        <div className="text-container">
          <h3>Hi!</h3>
          <h1>I'm Jake Slone, a Developer based in Calgary.</h1>
          <p>
            I like to create websites and applications. I'm 23 and I have been
            working as a developer for 3 years. Check out some of my projects
            and if you'd like to contact me, send me an{" "}
            <a href="mailto:jake@slone.ca">email.</a>
          </p>
        </div>
        <div className="img-container">
          <img src={calgs} alt="Calgary Downtown Drawing" />
        </div>
        <p>
          I like to create websites and applications. I'm 23 and I have been
          working as a Developer for 3 years. Check out some of my projects and
          if you'd like to contact me, send me an{" "}
          <a href="mailto:jake@slone.ca">email.</a>
        </p>
        <div className="links-container">
          <ul>
            <li>
              <a
                href="https://ca.linkedin.com/in/jakeslone98"
                target="_blank"
                rel="noreferrer"
              >
                <p>LinkedIn</p>
                <span>
                  <p>Link</p> <img src={link} alt="link icon" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JakeSlone"
                target="_blank"
                rel="noreferrer"
              >
                <p>Github</p>
                <span>
                  <p>Link</p> <img src={link} alt="link icon" />
                </span>
              </a>
            </li>
            <li>
              <div
                onClick={copyEmail}
                onKeyDown={copyEmail}
                role="button"
                tabIndex={0}
              >
                <p>Email</p>
                <span>
                  <p>{isCopied ? "Copied" : "Copy"}</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero
