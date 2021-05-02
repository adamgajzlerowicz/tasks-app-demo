![Node.js CI](https://github.com/adamgajzlerowicz/tasks-app-demo/workflows/Node.js%20CI/badge.svg)

For quick start, the application is based on [Create React App](https://create-react-app.dev/docs/adding-typescript) starter. The typescript variant to be specific.

## Usage

To use the app, install the dependencies by running `yarn` and start by running `yarn start`.

## Testing

Application has logic points tested with unit tests. To run tests please run `yarn test`. For the watch mode use `yarn test:watch`

## Overview
* Application uses Styled Components for namespaced css class names.
* Given that this is a Kanban board, there is no point stacking elements on top of each other (opinion based). I went with minimum supported screen width. This means that even if it is not possible to fit everything on the screen, the board is still operable.
* For performance reasons, the application passes around the `id` to each card. The card requests the element details by itself.
* The currently selected board is something that should be globally accessible. To prevent passing the value top to bottom, it is made available by React context.
* Each asynchronous element provides it's loading feedback by showing a spinner.
* Cloud functions are placed within the `functions` directory. There are 2 actions (create and delete) which when triggered will update counters on the boards.
* All application state is fully synchronized with the firestore. Given multiple users use the board, they can operate it simultaneously and see all changes instantly.
