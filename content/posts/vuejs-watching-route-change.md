---
title: "Vuejs Watching Route Changes"
date: 2024-09-20T23:20:15+07:00
description: use watch to monitor changes to the current route and react accordingly (e.g., fetch new data when a different page is navigated to).
tags: [js, vuejs]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```html
<script>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    // Watch for changes in the route params or query
    watch(route, (newRoute, oldRoute) => {
      console.log('Route changed:', newRoute.path);
      // trigger a function or fetch data based on the new route
    });

    return {};
  },
};
</script>

```
