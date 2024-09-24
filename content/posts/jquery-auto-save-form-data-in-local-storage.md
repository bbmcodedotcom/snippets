---
title: "jQuery Auto Save Form Data in LocalStorage"
date: 2024-09-24T23:19:35+07:00
description: Automatically save form data in local storage so that it persists on page refresh.
tags: [js, jquery]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
$('input, textarea').on('keyup', function() {
    var id = $(this).attr('id');
    var value = $(this).val();
    localStorage.setItem(id, value);
});

// Retrieve saved data
$('input, textarea').each(function() {
    var id = $(this).attr('id');
    if (localStorage.getItem(id)) {
        $(this).val(localStorage.getItem(id));
    }
});

```
