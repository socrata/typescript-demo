# Typescript Lunch 'n' Learn

## Running

First, run:

```sh
npm install
```

To run the webpack dev server:

```sh
npm start
```

To compile everything:

```sh
npm run build
```

## Project Layout

`components/ReduxExampleJS` and `components/ReduxExampleTS` both contain the same toy app, implemented in JavaScript and TypeScript respectively.

These two examples can be switched between using the nav bar at the top of the page.

The purpose is to demonstrate the differences and tradeoffs between JS and TS.

Things to note:

- The TypeScript project does have slightly more boilerplate in some spots, but at the same time less boilerplate in other spots; especially notice the absence of `PropTypes` (in an all TypeScript project, the `prop-types` package would never be imported)
- Notice how the two projects are extremely similar with minimal changes; for example, check out `util.js` and `util.ts`; the TS version is 99% the same, just with some added types. This adds nice documentation when using these functions elsewhere.
- Notice how in TypeScript, the props coming from `mapDispatchToProps` and `mapStateToProps` are defined in separate spots; this makes it much easier to figure out what is coming from where. On top of that, it will catch errors when you change the shape of what you expect to get back from redux.

## Resources

---

[Typescript Lessons Learned Repo](https://github.com/socrata/typescript-lessons-learned/): Socrata repo of documents capturing what we have learned about TypeScript on our journey

---

[Typescript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html): Quick guide to TS

[Typescript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html): In-depth docs about everything

[Typescript Playground](http://www.typescriptlang.org/play/): Type TS and see the compiled JS

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped): Repo containing types for thousands of npm modules

[Redux Typescript Docs](https://redux.js.org/recipes/usage-with-typescript): Hints on using TS with Redux

[Typesafe Actions](https://github.com/piotrwitek/typesafe-actions): Library for easily creating action-creators for redux

### `platform-ui` examples

[Common Form Components](https://github.com/socrata/platform-ui/tree/master/common/components/Forms): This directory has a lot of examples of everything from fuzzier types to redux validation. If you're interested in the process, [here's the commit that made the change](https://github.com/socrata/platform-ui/commit/600e71623c10fc7d822db2b59194e3192d5751a0) (side note: many bugs were found and fixed in this process!)

[Organization Dashboard Project](https://github.com/socrata/platform-ui/tree/master/frontend/public/javascripts/organizationDashboard): Good example of a larger project that has been completely converted to TypeScript
