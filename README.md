## Blog

> Live Site URL: [gabriel-freitas-blog](https://gabriel-freitas-blog.vercel.app/)

## Getting Started

### Hygraph

This project uses [Hygraph](https://hygraph.com/), so you need to create an account there first.

After you need to create the Schema, just follow the steps:

- Schema > Add New Model with `Place` name
- And add the following fields:
  - `Single Line Text` as `name`
  - `Slug` as `slug`
  - `Rich Text` as `description`
  - `Asset Picker` as `gallery`

- Schema > Add New Model with `Page` name
- And add the following fields:
  - `Single Line Text` as `heading`
  - `Slug` as `slug`
  - `Rich Text` as `body`

After that, fill some values and don't forget to `publish`!

#### Authentication

In order to create a token access, go to `Settings > API Access`, inside this page, find `Permanent Auth Tokens`,
create a Token Name and mark all queries possible. Save and get the token.

### NextJS

After creating your account on [Hygraph](https://hygraph.com/) and following the steps above, you just need to rename
the `.env.example` to `.env.local` (if you plan to run locally) and edit the keys there.

With all set, you can start the application with:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What is inside?

This project uses lot of stuff as:

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `format`: runs prettier in all components and pages



