# quick-scraper

A template for building a library through typescript and bundling it through esbuild.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/quick-scraper?logo=files&style=for-the-badge)
![npm](https://img.shields.io/npm/v/quick-scraper?logo=npm&style=for-the-badge)
![node-current](https://img.shields.io/badge/Node-%3E=12-success?style=for-the-badge&logo=node)
![npm](https://img.shields.io/npm/dw/quick-scraper?style=for-the-badge)

## Getting started

1. `git clone git@github.com:Unbuttun/quick-scraper.git my-project`
2. `cd my-project`
3. `pnpm install`

### Releasing

Under the hood, this library uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitizen](https://github.com/commitizen/cz-cli).
The goal is to avoid manual release process. Using `semantic-release` will automatically create a github release (hence tags) as well as an npm release.
Based on your commit history, `semantic-release` will automatically create a patch, feature or breaking release.

### Visualization of this Repo.
![Visualization of this repo](./diagram.svg)

Commands:

- `cz`: interactive CLI that helps you generate a proper git commit message, using [commitizen](https://github.com/commitizen/cz-cli)
- `semantic-release`: triggers a release (used in CI)
