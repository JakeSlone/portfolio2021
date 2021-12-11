import styled from "styled-components"
import { tablet, desktop } from "../Mixins"

export const Wrapper = styled.div`
  ${desktop} {
    padding: 0 40px;
  }

  .container {
    height: 64px;
    display: flex;
    justify-content: space-between;
    margin: 60px 20px 0;

    ${tablet} {
      margin: 60px 40px 0;
    }

    ${desktop} {
      max-width: 1500px;
      margin: 60px auto 0;
      font-size: 20px;
    }

    .tag {
      display: flex;
      align-items: center;
    }

    .to-top {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        height: 16px;
        transition-duration: 0.2s;
        margin-top: -1px;
      }

      &:hover {
        img {
          margin-top: -4px;
          transition-duration: 0.2s;
        }
      }
    }
  }
`
