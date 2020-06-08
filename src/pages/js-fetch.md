---
title: "Vanilla Javascript Fetch API"
blurb: "The native fetch method in javascript"
language: "js"
fileType: "ref-article"
orderNumber: 3
date: "2020-05-24"
---

## ... to get the data you need in your site

Goals of using fetch:

- Retrieve data from a server asynchronously (returns a promise)
- Transform data into readable JSON
- Use data in application of choice

## Important Notes:

- The first argument of the fetch function is the destination URL (The path to the resource)
- The second argument is the (optional) init object

* The first (top level) resolution of the Promise is an HTTP response, not the actual JSON content. The response object has a json method used to get the information.
* An init object is required for any method that is not a simple ('GET') call. The method is placed in the 'method' attribute of init.
* The Promise won't reject on HTTP error status. The 'ok' property is simply set to false (use this 'ok' property to check for errors)
* For a POST method (shown below) ensure:
  1. You have the credentials to POST the resource
  2. The method in the init object is set to POST
  3. The 'Content-Type' of the internal 'headers' object is set to match the body data type (often 'application/json)
  4. The body data type matches the 'Content-Type' (often requires stringifying an object)
  5. Often (mostly always), requests that change the content require authentication. The API host should have explanations on how to get authenticated. One of github's authentication methods: [Github Auth Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

```javascript
// -----------------Simple GET methods w/o init object--------------------------
// --------- Github API ---------

fetch("https://api.github.com/users/alex-gardner").then(data =>
  console.log(data)
)
// This code^ just gets you to the HTTP response
// Quite useful to see what the HTTP response looks like before we deal with the actual data

fetch("https://api.github.com/users/alex-gardner")
  .then(data => data.json()) //get a response & translate data to json
  .then(data => {
    console.log(data) //do something with data
  })

// --------- PokeAPI ---------
fetch("https://pokeapi.co/api/v2/pokemon/magikarp")
  .then(data => data.json())
  .then(data => {
    console.log(data)
  })

// -----------------GET method with error handling--------------------------
fetch("https://pokeapi.co/api/v2/pokemon/superhypergigamagikarp")
  .then(data => {
    if (data.ok) {
      // if the response is ok, then we get it to JSON
      return data.json()
    } else {
      // if the data is not ok, we print the error code and status to the console
      console.error(data.status, data.statusText)
    }
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log("There was an error with the request"))

// --------------------------- POST method to Github's gists API---------------------------
let playSport = JSON.stringify({ sport: "Best Sport" })

fetch("https://api.github.com/gists", {
  method: "POST",
  headers: {
    // "Content-Type": "application/json",
    Authorization: "token ***YOUR_GITHUB_TOKEN***",
  },
  body: JSON.stringify({
    description: "test case POST",
    public: true,
    files: {
      "tester.js": {
        content: playSport,
      },
    },
  }),
})
  .then(res => res.json())
  .then(res => console.log(res))
```

## Links

[Using Fetch API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

[Dan Levy's GitHub Gist](https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801)

[Google Chrome's Example](https://googlechrome.github.io/samples/fetch-api/fetch-post.html)

[Any API - Documentation for Open APIs](https://any-api.com/)
