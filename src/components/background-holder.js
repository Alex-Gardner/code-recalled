import React from "react"
import bonsaiUrl from "../assets/images/backgrounds/bonsai-and-chairs-lg-75.webp"
import esplanadeUrl from "../assets/images/backgrounds/esplanade-singapore-lg-20.webp"
import keyboardMugUrl from "../assets/images/backgrounds/keyboard-and-mug-lg-80.webp"
import pottedSucculentUrl from "../assets/images/backgrounds/potted-succulent-lg-80.webp"
import tanOfficeUrl from "../assets/images/backgrounds/office-with-tan-table.webp"
import pinesAndWaterUrl from "../assets/images/backgrounds/pines-over-water.webp"
import whiteWorkStationUrl from "../assets/images/backgrounds/white-work-station.webp"

const backgroundImageArray = [
  bonsaiUrl,
  esplanadeUrl,
  keyboardMugUrl,
  pottedSucculentUrl,
  tanOfficeUrl,
  pinesAndWaterUrl,
  whiteWorkStationUrl,
]
let randomBackgroundSrc =
  backgroundImageArray[Math.floor(Math.random() * backgroundImageArray.length)]

export default function BackgroundHolder() {
  return (
    <>
      <div className="bg-img-holder">
        <img
          className="full-bg-img"
          src={randomBackgroundSrc}
          srcSet=""
          alt=""
        />
        <div className="img-overlay" />
      </div>
    </>
  )
}
