---
title: "Js Await Async in for Loop"
date: 2024-09-14T22:35:30+07:00
description: using await-async in a for loop in JavaScript
tags: [js]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
async function fetchData(urls) {
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(`Data from ${url}:`, data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  }
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
];

fetchData(urls);
```
`fetchData` is an async function that takes an array of URLs.\
It loops through the `urls` array, and for each url, it waits for the fetch call to resolve using `await`.\
The result of the fetch is then parsed as JSON using `await response.json()`, and the data is logged.\
This ensures that each fetch operation waits for the previous one to complete before moving to the next URL in the loop.
