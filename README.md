# Intro
- This is a React application where the user can create records using a form and afterwards
see them displayed in a table. The form validates the input data and displays any error messages.
- The table contains a search field which can be used to filter the table items by User Name.
  - If no search param is provided, all the current records are shown.
  - If the search param is invalid, the table state will not change.
  - If the search param is valid, the results will be displayed in the table.

# Tech overview
- React
- Redux  (with Immutable.js)
- ES6 (Babel)
- Webpack
- Jest
- SCSS
- CSS modules

# Tests
- All logic is covered by unit tests (`core.js` and the `users` reducer) using Jest
- To run the tests use `npm test` or `npm run test:watch`

# See it in action
- To start the application in development mode use `npm run dev`
- `Node v10.13.0` or upwards is recommended
