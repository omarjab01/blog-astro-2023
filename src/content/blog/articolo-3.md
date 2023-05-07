---
title: Post 3
description: Slugifying strings is a common task in web development, especially when dealing with URLs. A slug is a URL-friendly version of a string, typically used as a part of a URL to identify a specific resource.
author: Omar Jabraoui
tags:
  - Javascript
  - React JS
  - CSS
date: 2024-04-23
draft: false
---

```javascript
export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}
```


