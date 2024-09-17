---
title: "Vuejs Detect if user has scrolled to bottom"
date: 2018-08-12T10:24:39+02:00
description: Detect if the user has scrolled to bottom of a container element and executed a function.
tags: [utility, DOM, vuejs]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```html
<template>
  <div @scroll="onScroll"></div>
</template>

<script>
export default function () {
  methods: {
    onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (scrollTop + clientHeight >= scrollHeight) {
        this.loadMorePosts()
      }
    }
  }
}
</script>
```
