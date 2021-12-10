import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: rgba(150, 150, 150, 0.6);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;

  .progress-bar {
    position: relative;
    z-index: 9999999;
    top: 0;
    left: 0;
    background: ${props => (props.dark ? "white" : "#17181c")};
    transform-origin: left;
    height: 2px;
    width: ${props => props.scrollY}%;
  }
`

function Progress({ dark }) {
  const [scrollY, setScrollY] = useState(0)

  function logit() {
    let scrollTop = window.scrollY
    let docHeight = document.body.offsetHeight
    let winHeight = window.innerHeight
    let scrollPercent = scrollTop / (docHeight - winHeight)
    let scrollPercentRounded = Math.round(scrollPercent * 100)
    setScrollY(scrollPercentRounded)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  return (
    <Wrapper scrollY={scrollY} dark={dark}>
      <div className="progress-bar"></div>
    </Wrapper>
  )
}

export default Progress
