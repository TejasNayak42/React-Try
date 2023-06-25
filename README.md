# React-Try
1st:
           
    yarn create react-app my-app
2nd:

    yarn add -D tailwindcss postcss autoprefixer
3rd:

    yarn tailwindcss init -p
4th:In Tailwind config.js

    module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
5th:In index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
