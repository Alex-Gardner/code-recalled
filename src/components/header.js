import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import circlesBG from "../assets/images/backgrounds/hero-bg/blue-green-water-drops.webp"

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <header className="header">
        <h1 className="hero-text">{data.site.siteMetadata.title}</h1>
        <p className="hero-desc-text">Personal site of Alex Gardner.</p>
        <p className="main-page-blurb">
          Concise, simple explorations of front-end web tech.
        </p>
        {/* <img src={circlesBG} className="hero-bg-img" /> */}
      </header>
    </>
  )
}
