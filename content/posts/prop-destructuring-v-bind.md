---
title: "Vuejs Use v-bind for prop destructuring"
date: 2018-08-31T20:02:09+07:00
description: Use `v-bind` as kind of a "prop destructuring" instead of passing multiple object properties into a component as props.
tags: [component, prop]
author:
  name: Caleb Porzio
  email: calebporzio@gmail.com
  homepage: http://calebporzio.com/
  github: calebporzio
---

```html
<template>
  <post
    :id="post.id"
    :title="post.title"
    :author="post.author"
  />
  
  <!-- This (↑) is the same as this (↓) -->

  <post v-bind="post" />
</template>

<script>
// <post> component definition
export default {
  props: {
    id: Number,
    title: String,
    author: Object
  }
}
</script>
```
