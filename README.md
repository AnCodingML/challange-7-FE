# How to use
1. npm run i
2. npm run dev
# Routing
- Route [page](http://localhost:5173)
- Route cms [login](http://localhost:5173/cms/admin-login)
- Route cms [dashboard](http://localhost:5173/cms/dashboard)
- Route cms [cars](http://localhost:5173/cms/dashboard/cars)
<br><br>
<h1> Admin login</h1>
email: superadmin@mail.com <br>
ps: 123

<br><br>

# Step Front End Challange 6
<h2>STEP 1</h2>
Initial React TS using Vite <a>https://vitejs.dev/guide/</a> using npm<br>
<code>npm create vite@latest challange6 -- --template react-ts</code>
<h2>STEP 2</h2>
<code>npm run install <br> npm run dev</code>
<h2>STEP 3: Install Bootstrap</h2>
<code>npm install react-bootstrap bootstrap</code> and import css bootsrap to main.tsx

<br><br>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
