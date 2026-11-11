# Tic-Tac-Toe (console) with automated testing

A console tic-tac-toe game (`index.js`) tested with Jest.
Every push to `main` runs the tests automatically with **GitHub Actions**
(`.github/workflows/ci.yml`) on Node.js 20, 22 and 24.

## Run the tests locally

```bash
npm install
npm test          # quick run
npm run test:ci   # with a coverage report, same as CI
```
