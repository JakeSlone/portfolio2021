import styled from "styled-components"

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  background-color: ${props => (props.dark ? "white" : "#17181c")};
  bottom: 55px;
  right: 40px;
  z-index: 10;
  border-radius: 50%;
  cursor: pointer;

  > div {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${props => (props.dark ? "#17181c" : "white")};
    margin: 1px 0 0 1px;

    img {
      height: 67px;
      transform: translateY(-8px);
    }
  }
`
