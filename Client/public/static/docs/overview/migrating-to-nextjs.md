---
title: Migrating to Next.js
---

# Migrating to Next.js

The app is built around CRA (Create React App), but there are moments when you need a SSR (server
side render) system. In order to ensure that every search engine is able to index the pages
correctly, one of the most popular alternatives is [NextJS](https://nextjs.org/).

## Steps to migrate

There are a few steps that you should consider when migrating to Next.js. Here are the
[official docs](https://nextjs.org/docs/migrating/from-create-react-app)

### Dependencies

Install `next` dependency.

Remove `react-router`, `react-router-dom` and `react-scripts` dependencies.

### Scripts

Open `package.json` from project's root folder and replace

```json
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"eject": "react-scripts eject"
},
```

with

```json
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start"
}
```

### Convert entry file

Create React App uses the `index.html`
as [entry file](https://create-react-app.dev/docs/using-the-public-folder), whereas in Next.js uses
a custom `_document.js` file that has to be created in the `pages` folder.

All `<head>` code should be moved in `_document.js`
file [(learn more here)](https://nextjs.org/docs/advanced-features/custom-document).

### Shared layout

Next.js uses a custom `_app.js` file that wraps every route and can be used as a shared layout (
container), similar to the `App`
component [(learn more here)](https://nextjs.org/docs/advanced-features/custom-app).

Note that the app uses an `index.js` file as a wrapper over `App` component to pass required data
from a top level, so you may need to move that logic.

### Routing & Linking

Next.js is able to create the routing system using
a [folder based structure](https://nextjs.org/docs/routing/introduction).

To make the migration easy, this project has a similar folder structure, and its current routing
system makes use of components from `src/pages` folder.

1. Since the project uses `PascalCase` for component file names, it is recommended to rename the
   files to `dash-case`
   or `snake_case`.
2. Dynamic paths use the pattern `[slug].js` (`[dynamicParam].js`), so you may need to use the same
   strategy for some file names.
3. Remove `useRoutes` from `App` component.
4. Replace `Link` component from `react-router-dom` with Link component from `next/link`.
