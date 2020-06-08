---
title: "CSS Defaults"
blurb: "Useful CSS defaults to get started with"
language: "css"
fileType: "ref-article"
orderNumber: 2
date: "2020-05-21"
---

## ... that make authoring styles easy

A useful start for css files to make many things clearer to think about:

(a normalize or reset file can be used for a blank canvas)

1. Clear margins from all elements
2. Set the box-sizing for all elements to border-box
3. Make commonly used utility class styles (e.g for creating a centered box)
4. Reset default button styles (if using custom crafted ones)
5. Set up fluid text sizes. Can use either calc() or clamp() to get a useful baseline. Individual element text sizes can be set in 'em'.

```css
*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
}

.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  border-radius: 0;
  background: rgba(255 255 255 / 0);
}

body {
  font-size: calc(10px + 1vh + 1vw);
  /* or */
  font-size: clamp(6px, calc(4vw + 1vh), 25px);
}
```

Links:

[George Ornbo's Default Stylesheet](https://shapeshed.com/default-styles-for-css/)

[MDN box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

[Ahmad Shadeed - Styling Buttons](https://ishadeed.com/article/styling-the-good-old-button/)

[Responsive Typography From LogRocket](https://blog.logrocket.com/the-elements-of-responsive-typography/)

[CSS Tricks](https://css-tricks.com/simplified-fluid-typography/)
