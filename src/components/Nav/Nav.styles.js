import styled from "styled-components"
import { tablet, desktop } from "../Mixins"

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  transform: translateY(${props => (props.visible ? "0" : "-62px")});
  transition-duration: 0.2s;

  ${desktop} {
    transform: translateY(${props => (props.visible ? "0" : "-108px")});
    padding: 0 40px;
  }

  .container {
    width: auto;
    height: 64px;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    ${tablet} {
      margin: 0 40px;
    }

    ${desktop} {
      height: 110px;
      max-width: 1500px;
      margin: auto;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;

    :after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      background: ${props => (props.dark ? "white" : "#17181c")};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    :hover:after {
      width: 100%;
      left: 0;
    }

    ${desktop} {
      font-size: 20px;
    }
  }

  .logo-container {
    display: flex;
  }

  .logo {
    flex-basis: 50%;
    display: flex;
    align-items: center;
  }

  .items {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
      margin: 1px 12px 0;
      font-size: 12px;
    }
  }
`
