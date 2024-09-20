---
title: "Vuejs Watching Window Resize Event"
date: 2024-09-20T23:25:13+07:00
description: Use watch to respond to changes in window size, which can be useful for making responsive components.
tags: [js, vuejs]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```html
<template>
  <div>
    <p>Window Width: {{ windowWidth }}</p>
    <p v-if="isMobile">You are on a mobile device!</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';

export default {
  setup() {
    const windowWidth = ref(window.innerWidth);
    const isMobile = ref(windowWidth.value < 768);

    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    watch(windowWidth, (newWidth) => {
      isMobile.value = newWidth < 768;
    });

    onMounted(() => {
      window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateWidth);
    });

    return { windowWidth, isMobile };
  },
};
</script>

```
