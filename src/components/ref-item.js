import React from "react"

export default function ReferenceArticleLink(props) {
  return (
    <div className="ref-item">
      <div>
        <h2 className="ref-article-title">{props.title}</h2>
        <p className="ref-blurb">{props.blurb}</p>
      </div>
      <img alt="icon" className="ref-icon-img" src={props.icon} />
    </div>
  )
}
