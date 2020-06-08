---
title: "Object-Fit"
blurb: "Get media to look like you want it to"
language: "css"
fileType: "ref-article"
orderNumber: 5
date: "2020-06-02"
---

## ...to the size and aspect ratio you want!

The CSS object-fit property is used to specify how a "replaced element" (often images and videos) are resized to fit their container element.

Fill

- Image does not (necessarily) keep its aspect ratio
- Image is stretched to the dimensions of the content box exactly

Contain

- Image keeps its aspect ratio
- When the larger dimension of the content box “overshoots” the aspect ratio of the original image, the replaced element becomes “letter-boxed”

Cover

- Image keeps its aspect ratio
- One of the image’s dimensions is scaled to fill the containing box; the other dimension is **clipped** to fit the containing box

None

- Image keeps its aspect ratio **and** size
- If content box is smaller than image, the object is clipped to fit
- If content box is larger than image, whitespace surrounds the image
- The image’s center is moved to align to the center of the container element

Scale-down

- Chooses the smallest concrete object size between "none" and "contain"
- Acts like "none" when the content box is larger in both dimensions than the image
- Otherwise acts like "contain"

<iframe height="600" style="width: 100%;" scrolling="no" title="Object-Fit Pen" src="https://codepen.io/Alx-Gdnr-Pen/embed/LYpwMGp?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Alx-Gdnr-Pen/pen/LYpwMGp' target="_blank">Object-Fit Pen</a> by Alex Gardner
  (<a target="_blank" href='https://codepen.io/Alx-Gdnr-Pen'>@Alx-Gdnr-Pen</a>) on <a target="_blank" href='https://codepen.io'>CodePen</a>.
</iframe>

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="Alx-Gdnr-Pen" data-slug-hash="PoZqYJE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Object-Fit Side-by-Side">
  <span>Side-by-Side Comparisons: <a target="_blank" href="https://codepen.io/Alx-Gdnr-Pen/pen/PoZqYJE">
  Object-Fit Side-by-Side</a> by Alex Gardner (<a target="_blank" href="https://codepen.io/Alx-Gdnr-Pen">@Alx-Gdnr-Pen</a>)
  on <a target="_blank" href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Links:

[MDN CSS object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
