# running local dev environment with nix flake
optional, but makes it so that dependencies don't have to be installed globally. Original template sourced from: <https://github.com/akirak/flake-templates>

To run the dev environment with zsh, run: `nix develop --impure -c zsh` (based on [this answer](https://discourse.nixos.org/t/using-nix-develop-opens-bash-instead-of-zsh/25075/9))

Note that you can also use direnv as specified here: <https://nixos.wiki/wiki/Development_environment_with_nix-shell#direnv>

If set up, upon cloning the repo for the first time, run

``` sh
direnv allow .
```


# create-svelte

Note that now that bun exists, there's no reason to use npm anymore (to my very limited knowledge) - just replace every `npm` below with `bun` and it should work

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
