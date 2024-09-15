---
title: "PHP Sorting an array by multiple fields"
date: 2024-09-15T14:57:45+07:00
description: sort multiple arrays or an array of associative arrays by different fields using array_multisort.
tags: [PHP, sort, array]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```php
// Sorting an array by multiple fields
$people = [
    ['name' => 'John', 'age' => 28, 'city' => 'New York'],
    ['name' => 'Alice', 'age' => 24, 'city' => 'Los Angeles'],
    ['name' => 'Bob', 'age' => 32, 'city' => 'Chicago'],
    ['name' => 'Charlie', 'age' => 24, 'city' => 'San Francisco']
];

// Create arrays for the fields you want to sort by
$age = array_column($people, 'age');
$name = array_column($people, 'name');

// Use array_multisort to sort by age (ascending) and then by name (ascending)
array_multisort($age, SORT_ASC, $name, SORT_ASC, $people);

print_r($people);

// output
Array
(
    [0] => Array
        (
            [name] => Alice
            [age] => 24
            [city] => Los Angeles
        )

    [1] => Array
        (
            [name] => Charlie
            [age] => 24
            [city] => San Francisco
        )

    [2] => Array
        (
            [name] => John
            [age] => 28
            [city] => New York
        )

    [3] => Array
        (
            [name] => Bob
            [age] => 32
            [city] => Chicago
        )
)

// Sorting by multiple fields with different sort orders
$people = [
    ['name' => 'John', 'age' => 28, 'city' => 'New York'],
    ['name' => 'Alice', 'age' => 24, 'city' => 'Los Angeles'],
    ['name' => 'Bob', 'age' => 32, 'city' => 'Chicago'],
    ['name' => 'Charlie', 'age' => 24, 'city' => 'San Francisco']
];

// Create arrays for age and name
$age = array_column($people, 'age');
$name = array_column($people, 'name');

// Sort by age descending and by name ascending
array_multisort($age, SORT_DESC, $name, SORT_ASC, $people);

print_r($people);

// output
Array
(
    [0] => Array
        (
            [name] => Bob
            [age] => 32
            [city] => Chicago
        )

    [1] => Array
        (
            [name] => John
            [age] => 28
            [city] => New York
        )

    [2] => Array
        (
            [name] => Alice
            [age] => 24
            [city] => Los Angeles
        )

    [3] => Array
        (
            [name] => Charlie
            [age] => 24
            [city] => San Francisco
        )
)

```
