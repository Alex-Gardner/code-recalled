---
title: "HTML Essentials"
blurb: "Things Needed to make your HTML page go"
language: "html"
fileType: "ref-article"
orderNumber: 1
date: "2020-05-21"
---

## ...to make a useful HTML page

Considerations for a basic HTML page:

1. Make the file readable to a browser
2. Make it readable to the audience

<br/>

To do so, we include a certain number of attributes in the metadata of the page:

<div class="styling-div">

### In the html tag:

- language attribute

### In head tag:

- title: Title of Your Page
- meta charset (utf-8 is standard for essentially all uses)
- meta viewport information for mobile
- meta with author and name
- meta with description and information about website
- link with site icon image (.ico, png, jpeg ...etc)
- link with downloaded fonts
- link with stylesheet(s)
- script tag with js file(s)

</div>

```html
<html lang="en-US">
  <head>
    <title>*Website Title</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="*Name of Author*" />
    <meta name="description" content="*clear description of website*" />
    <link rel="icon" href="*icon image URL*" type="image/x-icon" />
    <link href="*link to font of choice*" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="*css stylesheet here*" />
    <script src="*javascript file*" defer></script>
  </head>
</html>
```

Links:

[MDN: What's in the head?](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
