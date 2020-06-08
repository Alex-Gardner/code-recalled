Start the site

- React (16+)
- BG image (tilt shift / simple whtie bg)
- Section for 3-4 interesting projs
- Section for useful snippets / refresh aids

ref items border
grid row (hardcode if necessary)

Ref items SVG:

- Currently using png image (relatively large file size) as the icon for the reference items. The problem seems to be that exporting the svg from the inkscape file causes the font to change from that of the first computer, causing the svg to get larger (bigger font) and overflow the container wanted.

\*\*!!! Change HTML Icon to "zoom out" (HTML text gets smaller, but still centered)
Move Blue square on square breathing app to the right and down (so it's in frame)

\*\*Future: create a function that returns project item components when fed the relevant props

Create a component for the reference section
When enough items are created (~6 total), reverse the array and have the oldest ones on the bottom. Starting with (about this section -> goals, sources, simplicity, etc)

\*\*
Effects:
-project items fade/fall into place
-on modal, link color needs to reflect the theme (visited can have different color)
-On mobile viewing (default) project items should not be greyed out (some opacity may be warranted)
-Hover effect on project items (use media query: designing this responsive first) should lighten the text

Reference section ideas:
CSS Custom Properties (CSS Variables Example)
JS addEventListener
CSS Perspective
HTML Radio Buttons
JS Streams
HTML Responsive Images (srcset)
Array Range (super helpful in functional programming)
CSS Basic Grids
Note: headache with gap (calculation of grid area not taking gap % size into account)
Object Fit
HTML A11y thinigs
CSS Animation
CSS Box Shadow
JS Array.includes
ES8 Has async/await
CSS Pseudo selectors (nth child etc)
MISC: Webp Image format and conversions

Re-learn md / mdx important bits
use md/mdx to write a couple sample ref-item pages (in the pages folder)

Fill Pages with content
Style Pages

Page header should have a link(svg image or text) back to home page.
header should be included in all pages
