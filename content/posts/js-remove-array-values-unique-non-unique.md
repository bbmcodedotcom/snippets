---
title: "Js Remove Non Unique or Unique Array Values"
date: 2024-09-26T23:38:15+07:00
description: Remove array values that appear more than once and remove all values that appear only once
tags: [js, array]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
// remove all values that appear more than once
const removeNonUnique = arr =>
  [...new Set(arr)].filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

removeNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]

// remove all values that appear only once
const removeUnique = arr =>
  [...new Set(arr)].filter(i => arr.indexOf(i) !== arr.lastIndexOf(i));

removeUnique([1, 2, 2, 3, 4, 4, 5]); // [2, 4]
```
