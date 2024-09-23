---
title: "Vuejs watchEffect Filtering and Searching Data"
date: 2024-09-23T23:07:44+07:00
description: watchEffect automatically filters the user list based on the search query, great for real-time search scenarios.
tags: [js, vuejs, watchEffect]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const searchQuery = ref('');
    const users = ref([
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
    ]);
    const filteredUsers = ref([]);

    watchEffect(() => {
      if (searchQuery.value) {
        filteredUsers.value = users.value.filter(user =>
          user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      } else {
        filteredUsers.value = users.value;
      }
    });

    return { searchQuery, filteredUsers };
  }
};
```
