import squareBreathingBanner from "../assets/images/projects/banners/square-breathing-banner.webp"
import aamCDFBanner from "../assets/images/projects/banners/aam-cdf-banner.webp"
import royalThaiBanner from "../assets/images/projects/banners/royal-thai-banner.webp"
import tennisHelperBanner from "../assets/images/projects/banners/tennis-helper-net-banner.webp"

const squareBreathingModal = {
  bannerSrc: squareBreathingBanner,
  bannerAlt: "Square Breathing Banner",
  projectTitle: "Square Breathing",
  anchorLink: "",
  anchorLinkText: "Applet",
  githubLink: "",
  githubLinkText: "Github Repository",
  projectInformation: {
    paragraph1: `Square breathing (also known as box breathing) is a technique used to bring intentional thought to the activity of breathing. 
    The technique is so named for the emphasis on four equal parts of breathing: inhalation, holding of breath, exhalation, and a final pause (with empty lungs).
    This approach is said to calm the mind, improve concentration, and reduce feelings of both stress and anxiety.`,
    paragraph2: `The square breathing applet is designed to introduce the technique while providing both a visual aid for the four steps 
    and a pleasant background on which to focus. A curated list of background images is provided in the options panel, while an input allows for the user to 
    enter any image link they may personally wish to add to the available gallery options. Other options control the cycle speed, the guiding animation, and the number of cycles.
    The site is created purely from vanilla browser technology: CSS, JS, and HTML.`,
  },
}
const aamCDFModal = {
  bannerSrc: aamCDFBanner,
  bannerAlt: "Adobe Audience Manager Banner",
  projectTitle: "Adobe Audience Manager Customer Data Feeds Parser",
  anchorLink: "",
  anchorLinkText: null,
  githubLink: "",
  githubLinkText: "AAM CDF Parser",
  projectInformation: {
    paragraph1: `Adobe Audience Manager is a data management platform used to deliver a unified view of audiences of your product. 
    This platform enables organizations to identify valuable audiences and deliver higher-conversion services and advertising more directly. This
    parser is a command line tool used to  transfer the newline delimited JSON data directly into a MySQL database. 
    The parser accomplishes this using NodeJS streams and MySQL as a database store.`,
  },
}
const royalThaiModal = {
  bannerSrc: royalThaiBanner,
  bannerAlt: "Royal Thai Banner",
  projectTitle: "Royal Thai Website Redesign",
  anchorLink: "",
  anchorLinkText: "Royal Thai",
  githubLink: "",
  githubLinkText: "Github Repository",
  projectInformation: {
    paragraph1: `The main site of Royal Thai was originally designed as a lightweight web presence for a local Orlando, FL restaurant. 
    In this update/refresh, the site was designed to be more modern, responsive, and contain media assets deserving of the establishment.  
    The site features modern HTML and CSS features.`,
  },
}
const tennisHelperModal = {
  bannerSrc: tennisHelperBanner,
  bannerAlt: "Tennis Helper Banner",
  projectTitle: "Tennis Helper (Under Construction)",
  anchorLink: "",
  anchorLinkText: "Tennis Helper",
  githubLink: "",
  githubLinkText: "Github Repository",
  projectInformation: {
    paragraph1: `App Under Construction`,
  },
}

let modalDetails = [
  squareBreathingModal,
  aamCDFModal,
  royalThaiModal,
  tennisHelperModal,
]
export default modalDetails

/*  Adding a project:
    1) In this file, complete all the object properties as shown above
        -add the variable name to the exported array
    2) In index.js: add a ProjectTitle Component with the same kind of props as the previous components
        (projectName, toggleModalState, setModalContent, projectImageURL, imageClass, projectDesc, associatedModal)
        Note: associatedModal's index should match the index of the modalDetails array where the project in question lies
*/
