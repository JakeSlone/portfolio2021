import styled from "styled-components"
import { tablet, desktop } from "../Mixins"

export const Wrapper = styled.div`
  padding: 80px 20px 0;

  ${tablet} {
    padding: 170px 40px 0;
  }

  ${desktop} {
    max-width: 1500px;
    margin: auto;
    padding: 200px 40px 0 40px;
  }

  .container {
    ${desktop} {
      max-width: 1300px;
      margin: auto;
    }

    h3 {
      font-size: 34px;
    }

    .projects-container {
      ${desktop} {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .projects-card {
        margin-top: 60px;

        ${desktop} {
          width: 40%;
          margin-top: 100px;
        }
        h3 {
          font-size: 24px;
          margin-bottom: 20px;
        }
        hr {
          width: 50px;
          margin-left: 0;
        }
        p {
          line-height: 1.3;
        }
        a {
          text-decoration: none;
          margin-bottom: 18px;
          display: block;
          img {
            height: 10px;
            margin-left: 3px;
            transition-duration: 0.2s;
          }

          &:hover {
            img {
              transition-duration: 0.2s;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
`
