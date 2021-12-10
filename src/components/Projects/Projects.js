import React from "react"
import { Wrapper } from "./Projects.styles"
import caret from "../../images/right-arrow.png"
import caretb from "../../images/right-arrowb.png"

const Projects = ({ dark }) => {
  return (
    <Wrapper>
      <div className="container">
        <h3 data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
          Projects
        </h3>
        <div className="projects-container">
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Nissan/Infiniti Owners Portal</h3>
            <hr />
            <p>
              Worked with a small team on the redesign of the portal. The
              project is only accessible if you own a Nissan/Infiniti vehicle
              but there is multiple screenshots and more info at the link below.
            </p>
            <a
              href="https://github.com/JakeSlone/OwnersPortal"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Nissan Titan Campaign</h3>
            <hr />
            <p>
              Worked with a small team on a targeted campaign website. The
              project consisted of 5 different webpages with each containing
              different images and copy targeted to the users location.
            </p>
            <a
              href="https://www.nissanusa.com/titan-tech-for-doing-it-yourself/"
              target="_blank"
              rel="noreferrer"
            >
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
            <a
              href="https://github.com/JakeSlone/TitanCampaign"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>TypeChess Discord Bot</h3>
            <hr />
            <p>
              A chess bot that is controlled through a discord channel. You can
              either play against someone else in the channel, or play against
              an AI.
            </p>
            <a
              href="https://github.com/JakeSlone/TypeChessBot"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>TypeChess Twitch Bot</h3>
            <hr />
            <p>
              A chess bot that is controlled through twitch chat. Any valid
              moved typed in the streams twitch chat will be played on the
              stream.
            </p>
            <a
              href="https://www.twitch.tv/typechess"
              target="_blank"
              rel="noreferrer"
            >
              Website <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
            <a
              href="https://github.com/JakeSlone/TypeChessTwitch"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Portfolio 21</h3>
            <hr />
            <p>
              This is the website you are on right now and my current portfolio.
            </p>
            <a
              href="https://github.com/JakeSlone/portfolio2021"
              target="_blank"
              rel="noreferrer"
            >
              Github <img src={dark ? caret : caretb} alt="caret icon"></img>
            </a>
          </div>
          <div
            className="projects-card"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease"
          >
            <h3>Chess Audio</h3>
            <hr />
            <p>
              This is an unnofficial chrome extension that adds audible move
              notation to chess.com.
            </p>
            <a href="/">Work in Progress...</a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Projects
