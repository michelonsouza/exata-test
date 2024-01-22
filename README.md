# Rick and Morty Exata

<img width="300" src="./docs/resources/rick.png" />

### Access [Rick And Morty Exata](https://rick-and-morty-exata.netlify.app/)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

<!-- Rick and Morty -->

## Run project

1. Copy `.env.example` file to `.env`
2. Change your `node version` to `18.18.2` or, if you use `nvm`, run:

```bash
nvm use
```

3. Install dependencies:

```bash
npm install
```

or

```bash
yarn
```

4. Start application:

```bash
npm run dev
```

or

```bash
yarn dev
```

## Run tests

1. All tests

```bash
npm run test
```

or

```bash
yarn test
```

2. Visual tests

```bash
npm run test:ui
```

or

```bash
yarn test:ui
```

3. With coverage

```bash
npm run test:coverage
```

or

```bash
yarn test:coverage
```
