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
    ${tablet} {
      display: flex;
      flex-wrap: wrap;
    }

    ${desktop} {
      max-width: 1300px;
      margin: auto;
    }

    h3 {
      font-size: 40px;
      line-height: 1.1;

      ${tablet} {
        margin-top: 0;
      }
    }

    p {
      line-height: 1.3;

      ${tablet} {
        flex-basis: 50%;
        padding: 0 30px;
        margin: auto;
      }
    }

    > p {
      display: block;

      ${desktop} {
        display: none;
      }
    }

    .text-container {
      p {
        display: none;

        ${desktop} {
          display: block;
          padding: 0;
        }
      }

      ${desktop} {
        flex-basis: 50%;
      }
    }

    .img-container {
      img {
        width: 100%;
      }

      ${tablet} {
        flex-basis: 50%;
      }

      ${desktop} {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 80%;
        }
      }
    }

    .links-container {
      width: 220px;
      margin: 40px auto 0;

      ${desktop} {
        margin: 40px 0 0 0;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          position: relative;
          border-bottom: solid 1px
            ${props => (props.dark ? "white" : "#17181c")};
          overflow: hidden;
          transition-duration: 0.3s;

          a,
          div {
            padding: 10px 0 9px;
            position: relative;
            display: flex;
            flex-direction: row;
            cursor: pointer;
            text-decoration: none;
            font-size: 14px;

            p {
              margin: 0;
              padding: 0;
              transition: color 0.3s;
              transition: margin-left 0.3s;
            }

            span {
              display: flex;
              flex-direction: row;
              margin-left: auto;
              margin-right: 2px;
              align-items: flex-start;
              p {
                color: #6e6f70;
                margin-right: 5px;
              }
              img {
                fill: #6e6f70;
                width: 8px;
                height: 8px;
                margin-bottom: 1px;
              }
            }
          }

          :hover {
            background-color: ${props => (props.dark ? "white" : "#17181c")};
            transition-duration: 0.3s;
            border-bottom: solid 1px
              ${props => (props.dark ? "black" : "white")};

            p {
              color: ${props => (props.dark ? "black" : "white")};
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
`
