# 🚀 Express TypeScript Boilerplate

A modern and opinionated boilerplate for building RESTful APIs using **Express**, **TypeScript**, and **quality-first tooling**.

[![codecov](https://codecov.io/gh/viniciuspiotto/express-typescript-eslint-prettier-template/graph/badge.svg?token=HIK8UQZ0V9)](https://codecov.io/gh/viniciuspiotto/express-typescript-eslint-prettier-template)

## ✨ Features

- ⚙️ **Express** with basic structure and security middlewares
- 🧠 **TypeScript** for static typing and developer ergonomics
- 🧹 **ESLint + Prettier** for code consistency and formatting
- 🧪 **Vitest** for fast and modern unit testing
- 📊 **Coverage reports** integrated with Codecov
- ✅ **Pre-commit hooks** via Husky and lint-staged
- ⛓️ **GitHub Actions CI** with caching, lint, type-check, tests, and coverage
- 🔒 Environment management via `.env` and `.gitignore`
- 🧑‍💻 Editor config via `.vscode` and `.nvmrc` for Node versioning

## 🛠️ Scripts

| Script          | Description                            |
| --------------- | -------------------------------------- |
| `pnpm dev`      | Run the app in development mode        |
| `pnpm build`    | Compile TypeScript to JS               |
| `pnpm start`    | Start the compiled app                 |
| `pnpm test`     | Run tests with Vitest                  |
| `pnpm coverage` | Run tests and generate coverage report |
| `pnpm lint`     | Run ESLint                             |
| `pnpm format`   | Format files with Prettier             |

## ✅ Code Quality

This project enforces consistent code style and safety using:

- **ESLint** with recommended TypeScript and security rules
- **Prettier** for formatting
- **Vitest** with coverage threshold (integrated with Codecov)
- **Husky** and **lint-staged** to prevent bad commits

## 🧪 Continuous Integration (CI)

CI is handled via **GitHub Actions** and includes:

- Multi-version testing on Node 22 and 23
- Caching with `pnpm` for faster installs
- Type checking, linting, formatting checks
- Code coverage upload to Codecov

You can view the latest CI status and coverage on your PRs.

## 📦 Requirements

- [Node.js](https://nodejs.org/) (use `.nvmrc`)
- [pnpm](https://pnpm.io/) (enabled via Corepack)
- [Git](https://git-scm.com/)

## 📄 License

MIT © Vinicius Piotto
