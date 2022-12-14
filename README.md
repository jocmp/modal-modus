# Modal Modus

A routable modal demo.

Given a list of credit cards, the demo shows off how to

- Open a modal card index at `/cards`
- Route to a given credit card by ID, e.g. `/cards/3`
- Re-route back to a card index at `/cards`
- Close the modal by hitting "Go back"

All state management is handled by the window location URL state
to allow the user to visit any given page without losing their
position after refreshing the browser or by using back navigation.

## Demo

- Visit the [CodeSandbox](https://codesandbox.io/p/github/jocmp/modal-modus/csb-95wp6r/draft/fancy-meadow) for an interactive demo
- View the [Screenshots](./screenshots/) directory for demo pictures.

## Getting started

1. Pull this repo
2. `npm install`
3. `make run`

Your browser should then open the app at <localhost:3000>
