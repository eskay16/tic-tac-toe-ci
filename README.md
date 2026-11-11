# Tic-Tac-Toe (console) with automated testing

[![CI - Automated Tests](https://github.com/eskay16/tic-tac-toe-ci/actions/workflows/ci.yml/badge.svg)](https://github.com/eskay16/tic-tac-toe-ci/actions/workflows/ci.yml)

A console tic-tac-toe game (`index.js`) tested with Jest.
Every push to `main` runs the tests automatically with **GitHub Actions**
(`.github/workflows/ci.yml`) on Node.js 20, 22 and 24.

## Run the tests locally

```bash
npm install
npm test         
npm run test:ci   
```
