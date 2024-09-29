---
title: "Js Throttle Function"
date: 2024-09-29T23:22:10+07:00
description: A throttle function ensures that a given function is only called once within a specified period, even if it's triggered multiple times during that period.
tags: [js]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);  // Executes the function if not in throttle period
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);  // Sets a delay before next execution is allowed
    }
  };
}
// Basic Usage Example
function onScroll() {
  console.log('Scroll event detected:', new Date().toLocaleTimeString());
}

// Limit the scroll event handler to run once every 1000ms (1 second)
window.addEventListener('scroll', throttle(onScroll, 1000));
// even if the user scrolls rapidly, the onScroll function will only be executed once every second.
```
