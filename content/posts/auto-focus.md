---
title: "Auto Focus"
date: 2018-08-11T08:17:43+02:00
description: Automatically set focus into an input element when it's inserted into the document.
tags: [directive, utility]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```html
<template>
  <input v-auto-focus type="email" placeholder="I'm auto-focused!">
</template>

<script>
Vue.directive('auto-focus', {
  inserted: el => el.focus()
})
</script>
```
