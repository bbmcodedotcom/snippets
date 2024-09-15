---
title: "Vuejs Click Away"
date: 2018-08-11T14:20:19+02:00
description:  A simple directive that triggers a function if the user clicks outside of the bound element.
tags: [directive, utility, vuejs]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```html
<template>
  <div v-clickaway="hideMe">Hide me</div>
</template>

<script>
Vue.directive('clickaway', {
  bind (el, { value }) {
    if (typeof value !== 'function') {
      console.warn(`Expect a function, got ${value}`)
      return
    }

    document.addEventListener('click', e => el.contains(e.target) || value())
  }
})

export default {
  methods: {
    hideMe () {
      // your logic here
    }
  }
}
</script>
```
