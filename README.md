# Turbo Packages

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://dash.zeabur.com/templates/CLI3GE)

A starter monorepo built with Turborepo, Nextjs, Docker, Typescript, Vitest and Tailwind.

## What's included

This turborepo uses pnpm as a package manager. It includes the following packages:

### Packages

- `@acme/ui`: A UI library built with React, Typescript, Tailwind and Vitest.
- `@acme/ui-utils`: A utility library built with Typescript and React.
- `@acme/utils`: A utility library built with Typescript.
- `@acme/tailwind-config`: A Tailwind config library.

### Apps

- `@acme/docs`: A documentation app built with Nextra.

### Playgrounds

- `next-app-play`: A Nextjs app playground.

## Getting started

### Install dependencies

```bash
pnpm i
```

### Run the docs app

```bash
pnpm dev --filter docs...
```

### Run the nextjs app

```bash
pnpm dev --filter next-app-play...
```

### Build the docs app

```bash
pnpm build --filter docs...
```

## Continuous Integration

### Test, Lint and Typecheck

```bash
pnpm test lint type:check
```

### Check package versions

The repo uses [manypkg](https://github.com/Thinkmill/manypkg)

#### `manypkg check`

`manypkg check` runs all of the checks against your repo, logs any errors and exits with a code

#### `manypkg fix`

`manypkg fix` runs all of the checks against your repo and fixes any of problems that can be fixed.

```bash
pnpm manypkg check

# or

pnpm manypkg fix
```

### Release

The repo uses [changesets](https://github.com/changesets/changesets)

#### Versioning and publishing

Once you decide you want to do a release, you can run

```bash
pnpm version
```

This consumes all changesets, and updates to the most appropriate semver version based on those changesets. It also writes changelog entries for each consumed changeset.

We recommend at this step reviewing both the changelog entries and the version changes for packages. Once you are confident that these are correct, and have made any necessary tweaks to changelogs, you can publish your packages:

```bash
pnpm release
```

This will run `npm publish` in each package that is of a later version than the one currently listed on npm.