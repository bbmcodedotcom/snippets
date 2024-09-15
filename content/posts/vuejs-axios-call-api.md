---
title: "Vuejs Axios Call Api"
date: 2024-09-15T12:42:15+07:00
description: The best practices for API calls in Vue.js 3 Composition API.
tags: [js, vuejs]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

// Define your API methods
export default {
  getUsers() {
    return apiClient.get('/users');
  },
  getUser(id) {
    return apiClient.get(`/users/${id}`);
  },
};


// src/composables/useFetchUsers.js
import { ref } from 'vue';
import apiService from '../services/apiService';

export function useFetchUsers() {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchUsers = async () => {
    loading.value = true;
    try {
      const response = await apiService.getUsers();
      data.value = response.data;
    } catch (err) {
      error.value = 'Error fetching users';
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, fetchUsers };
}


// src/components/UsersComponent.vue
<template>
  <div>
    <button @click="fetchUsers">Load Users</button>
    <div v-if="loading">Loading...</div>
    <ul v-if="data">
      <li v-for="user in data" :key="user.id">{{ user.name }}</li>
    </ul>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useFetchUsers } from '../composables/useFetchUsers';

export default {
  setup() {
    const { data, loading, error, fetchUsers } = useFetchUsers();
    
    onMounted(() => fetchUsers()); // Fetch users when the component is mounted

    return { data, loading, error, fetchUsers };
  },
};
</script>

// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import UsersComponent from './components/UsersComponent.vue';

createApp(App)
  .component('UsersComponent', UsersComponent)
  .mount('#app');

```
```html
src/
│
├── composables/
│   └── useFetchUsers.js   # Composable for fetching users
│
├── services/
│   └── apiService.js      # Centralized API service layer
│
├── components/
│   └── UsersComponent.vue # Component using the API and composable
│
└── main.js                # Main entry point for Vue app
```
