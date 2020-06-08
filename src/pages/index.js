import React from "react"
// import "./main.css";
import ReactDOM from "react-dom"
import { graphql, Link } from "gatsby"
/* --------------------- Asset Imports --------------------- */
import squareBreathingUrl from "../assets/images/projects/square-breathing-bg.webp"
import aamImageUrl from "../assets/images/projects/aam-cdf-code-img.webp"
import royalThaiUrl from "../assets/images/projects/rt-button-img.webp"
import tennisHelperUrl from "../assets/images/projects/tennis-helper-button-img.webp" //!!!!!!!!
import htmlIcon from "../assets/images/article-icons/html-symbol.png"
import cssIcon from "../assets/images/article-icons/css-symbol.png"
import jsIcon from "../assets/images/article-icons/js-symbol.png"

/* --------------------- JS Imports --------------------- */
import CloseIcon from "../components/close-icon.js"
import useModal from "../components/modal.js"
import modalDetails from "./modal-details.js"
// modalDetails is an array of objects with the copy text for each modal
import Header from "../components/header.js"
import BackgroundHolder from "../components/background-holder.js"
import ProjectItem from "../components/project-item.js"
import ReferenceArticleLink from "../components/ref-item.js"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

function getIcon(language) {
  switch (language) {
    case "html":
      return htmlIcon

    case "css":
      return cssIcon

    case "js":
      return jsIcon

    default:
      console.log("get another icon")
  }
}

function ProjectModal({ modalState, hide, modalContent }) {
  if (modalState.isShowing) {
    return ReactDOM.createPortal(
      <div className="modal-holder">
        <article className="project-modal-article">
          <button type="button" className="close-modal-button" onClick={hide}>
            <CloseIcon />
          </button>
          <div className="img-holder">
            <img
              className="modal-hero-img"
              src={modalContent.bannerSrc}
              alt={modalContent.bannerAlt}
            />
            <div className="modal-title-holder">
              <h2 className="modal-project-title">
                {modalContent.projectTitle}
              </h2>
            </div>
          </div>
          <section className="project-details">
            <ul className="links-holder">
              {modalContent.anchorLinkText ? (
                <li>
                  <a href="#">{modalContent.anchorLinkText}</a>
                </li>
              ) : null}
              <li>
                <a href="#">{modalContent.githubLinkText}</a>
              </li>
            </ul>
            <p className="project-information">
              {modalContent.projectInformation.paragraph1}
            </p>
            <p className="project-information">
              {modalContent.projectInformation.paragraph2}
            </p>
          </section>
        </article>
      </div>,
      document.body
    )
  } else {
    return null
  }
}

export default function Home({ data }) {
  const { modalState, toggleModalState } = useModal()
  const [modalContent, setModalContent] = React.useState(modalDetails[0])
  return (
    <div className="main-holder">
      <ProjectModal
        modalState={modalState}
        hide={toggleModalState}
        modalContent={modalContent}
      />
      <Header />
      <div className="content-holder">
        <div className="bg-blurb-holder center-box">
          <BackgroundHolder />

          <div className="personal-projects">
            <ProjectItem
              projectName="Square Breathing"
              toggleModalState={toggleModalState}
              setModalContent={setModalContent}
              projectImageURL={squareBreathingUrl}
              imageClass="proj-img-1"
              projectDesc="proj-desc-1"
              associatedModal={modalDetails[0]}
            />
            <ProjectItem
              projectName="Adobe Audience Manager Customer Data Feeds"
              toggleModalState={toggleModalState}
              setModalContent={setModalContent}
              projectImageURL={aamImageUrl}
              imageClass="proj-img-2"
              projectDesc="proj-desc-2"
              associatedModal={modalDetails[1]}
            />
            <ProjectItem
              projectName="Royal Thai Website"
              toggleModalState={toggleModalState}
              setModalContent={setModalContent}
              projectImageURL={royalThaiUrl}
              imageClass="proj-img-3"
              projectDesc="proj-desc-3"
              associatedModal={modalDetails[2]}
            />
            <ProjectItem
              projectName="Tennis Helper App"
              toggleModalState={toggleModalState}
              setModalContent={setModalContent}
              projectImageURL={tennisHelperUrl}
              imageClass="proj-img-4"
              projectDesc="proj-desc-4"
              associatedModal={modalDetails[3]}
              projectStatus="under-construction"
            />
          </div>
        </div>

        <div className="simple-refs-holder">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug}>
              <ReferenceArticleLink
                icon={getIcon(node.frontmatter.language)}
                key={node.id}
                title={node.frontmatter.title}
                blurb={node.frontmatter.blurb}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { fileType: { regex: "/^ref-article$/" } } }
      sort: { fields: frontmatter___orderNumber, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            blurb
            language
          }
          html
          fileAbsolutePath
        }
      }
    }
  }
`

// export default function App() {
//   return (
//     <div className="App">
//       <TryThing />
//     </div>
//   )
// }

// const rootElement = document.getElementById("root")
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// )
