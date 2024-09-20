---
title: "Vuejs Watching Form Input Validation"
date: 2024-09-20T23:17:38+07:00
description: use watch to monitor form input fields and validate them in real-time.
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
    <label>Email:</label>
    <input v-model="email" type="email" />
    <span v-if="emailError">{{ emailError }}</span>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const email = ref('');
    const emailError = ref('');

    // Watch email input for changes and validate it
    watch(email, (newEmail) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(newEmail)) {
        emailError.value = 'Invalid email format';
      } else {
        emailError.value = '';
      }
    });

    return { email, emailError };
  },
};
</script>
```
