This app is hosted on [https://weather-app-lovat-three.vercel.app](https://weather-app-lovat-three.vercel.app)

## Getting Started

First, install dependencies and run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App structure

This app is written in `Typescript` and uses `Nextjs` for SSR, it has 1 page on `src/pages/index.js`.
Data layer is on `src/data.ts` and has only 1 repository called `ForecastRepository`

## Testing

Unit tests use `jest` and `@testing-library/react`.
E2e tests are written with `cypress` and uses `@testing-library/cypress` for element locators to be consistent with unit tests.
Test and development enviroments both uses `mswjs` for mocking http requests.

## Linting

For code formatting it uses `prettier` and for linting `stylelint` and `eslint`.

## Browser support

Supported browsers are defined on `.browserslistrc`
