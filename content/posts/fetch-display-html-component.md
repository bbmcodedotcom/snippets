---
title: "Fetch and display HTML"
date: 2018-08-12T11:08:25+02:00
description: Sometimes you just want to fetch some HTML from the server, display them right in your application, and call it done.
tags: [utility, component, ajax]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```html
<template>
  <html-fetcher url="/your/static/content.html"/>
</template>

<script>
import axios from 'axios'

Vue.component('html-fetcher', {
  template: '<div>Loading…</div>',
  props: ['url'],
  mounted () {
    axios.get(this.url).then(({ data }) => this.$el.outerHTML = data)
  }
})
</script>
```

