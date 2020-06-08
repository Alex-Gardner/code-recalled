import React from "react"
import overlayUrl from "../assets/images/projects/under-construction-overlay.svg"

const ConstructionOverlay = ({ projectStatus }) => {
  if (projectStatus === "under-construction") {
    return (
      <img
        alt="under construction overlay"
        className="construction-overlay-image"
        src={overlayUrl}
      />
    )
  } else {
    return null
  }
}

const ProjectItem = function ({
  toggleModalState,
  projectImageURL,
  projectName,
  imageClass,
  projectDesc,
  associatedModal,
  setModalContent,
  projectStatus,
}) {
  const buttonForProject = React.useRef(null)
  const setThisModal = () => {
    setModalContent(associatedModal)
    toggleModalState()
  }

  return (
    <button
      className="project-item center-box"
      data-assoc-modal={associatedModal}
      ref={buttonForProject} //ref added
      onClick={setThisModal}
    >
      <img
        alt={""}
        className={"project-image " + imageClass}
        src={projectImageURL}
      />
      <ConstructionOverlay projectStatus={projectStatus} />
      <h2 className={"project-description " + projectDesc}>{projectName}</h2>
    </button>
  )
}

export default ProjectItem
