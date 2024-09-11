---
title: "Vuejs Smarter Watchers"
date: 2018-08-12T21:55:58+02:00
description: Watchers that are called immediately when the component is ready.
tags: [watcher]
author:
  name: Chris Fritz
  email: chrisvfritz@gmail.com
  homepage: https://www.patreon.com/chrisvuefritz/creators
  github: chrisvfritz
---

```js
watch: {
  searchText: {
    handler: 'fetchUserList',
    immediate: true
  }
},

methods: {
  fetchUserList () {
    //
  }
}
```
