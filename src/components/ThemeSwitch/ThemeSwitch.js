import React from "react"
import { Wrapper } from "./ThemeSwitch.styles"
import dripw from "../../images/dripw.svg"
import dripb from "../../images/dripb.svg"

const ThemeSwitch = ({ onClick, dark }) => {
  return (
    <Wrapper onClick={onClick} dark={dark}>
      <div>
        <img src={dark ? dripw : dripb} alt="Theme change icon" />
      </div>
    </Wrapper>
  )
}

export default ThemeSwitch
