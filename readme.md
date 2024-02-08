# Social media client

## Getting Started

### Installation

To install the Social Media Client, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd social-media-client
```

3. Install dependencies using npm:

```bash
npm install
```

### Usage

Once installed, you can use the following npm scripts to manage and run the application:

**Start:** Launches the application and watches for changes in SCSS files.

```bash
npm start
```

**Test:** Runs automated unit tests followed by automated end-to-end tests.

```bash
npm test
```

**Test Unit:** Runs unit tests using Jest.

```bash
npm run test-unit
```

**Test End-to-End:** Opens Cypress for end-to-end testing.

```bash
npm run test-e2e
```

**Test End-to-End CLI:** Runs Cypress in CLI mode for end-to-end testing.

```bash
npm run test-e2e-cli
```

**Lint:** Lints JavaScript files using ESLint.

```bash
npm run lint
```

**Lint Fix:** Automatically fixes linting issues in JavaScript files.

```bash
npm run lint-fix
```

**Format:** Formats JavaScript files using Prettier.

```bash
npm run format
```

**Build:** Compiles SCSS files into CSS.

```bash
npm run build
```

## Badges

The Social Media Client includes badges for automated testing:

[![Automated E2E Testing](https://github.com/martekn/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/martekn/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/martekn/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/martekn/social-media-client/actions/workflows/unit-test.yml)
