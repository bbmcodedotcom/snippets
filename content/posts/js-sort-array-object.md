---
title: "Js Sort Array Object"
date: 2024-09-14T23:02:14+07:00
description: Sort an array of objects by property in JavaScript
tags: [js]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
// Sorting by a String Property
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);
// Output: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]

// Sorting by a Numeric Property
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]

// Sorting by a Date Property
const events = [
  { title: "Event 1", date: new Date('2023-09-01') },
  { title: "Event 2", date: new Date('2023-08-01') },
  { title: "Event 3", date: new Date('2023-07-01') }
];

events.sort((a, b) => a.date - b.date);

console.log(events);
// Output: [{ title: "Event 3", date: 2023-07-01 }, { title: "Event 2", date: 2023-08-01 }, { title: "Event 1", date: 2023-09-01 }]

// Sorting in Descending Order
people.sort((a, b) => b.age - a.age);

console.log(people);
// Output: [{ name: "Charlie", age: 35 }, { name: "Alice", age: 30 }, { name: "Bob", age: 25 }]
```
