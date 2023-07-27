# SatCamp 2023 website

## Getting started

Install project dependencies:

- [Node](http://nodejs.org/) (see version in [.nvmrc](./.nvmrc)) or [nvm](https://github.com/creationix/nvm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```sh
nvm install
```

Install Node modules:

```sh
yarn install
```

Start the app for development:

```sh
yarn dev
```

Access <http://localhost:9000>.

## Deploy

Run:

```sh
yarn build
```

Copy the contents of `./dist` folder to the production server.
Or deploy to GitHub Pages with:

```sh
yarn deploy
```

## License

[MIT](LICENSE)
