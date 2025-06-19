[Source](https://tailwindcss.com/blog/tailwindcss-v4)
### Install Tailwind CSS
```
npm i tailwindcss @tailwindcss/postcss;
```

### Add the PostCSS plugin `postcss.config.js`

```ts
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};

```
### Import Tailwind in your CSS
```
@import "tailwindcss";
```

### improvement from v3
>  reducing the number of steps and removing a lot of boilerplate.
* No need `tailwind.config.js` 
