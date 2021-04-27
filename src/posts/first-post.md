---
title: "First Gatsby Blog Post"
date: "2020-01-18"
---

Put your first post here.

## This is a subheading

This text is not very exciting, but it's a post! And it works! It's just text, though.

![Caption Text](../images/NIK_64718.JPG "With some stuff here")

## Removed the seond photo

No point in rendering it twice

What if I now add code snippit?

```javascript{numberLines: 5}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```js
console.log("Hello World");
```

```js:title=myFile.js
console.log("Code with a file name title")
```