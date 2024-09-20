---
title: "Vuejs Watch to Trigger API"
date: 2024-09-20T23:23:13+07:00
description: Use watch to trigger API calls when a value changes under specific conditions.
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
    <input v-model="username" placeholder="Enter username" />
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const error = ref('');

    // Watch the username and make an API call when it changes
    watch(username, async (newUsername) => {
      if (newUsername.length >= 3) {
        try {
          const response = await axios.get(`/api/check-username?username=${newUsername}`);
          if (!response.data.available) {
            error.value = 'Username is already taken';
          } else {
            error.value = '';
          }
        } catch (err) {
          error.value = 'Error checking username';
        }
      } else {
        error.value = 'Username must be at least 3 characters long';
      }
    });

    return { username, error };
  },
};
</script>

```
