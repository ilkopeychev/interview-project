# Project description

- This is an interview project. It uses:
- **Typescript** - a superset of javascript, with strict typing
- **Node.js** - an awesome JS runtime
- **Express** - minimalistic web framework for node.js
- **React** - frontend framework
- **Redux** - state management for react
- **Jest** - testing library for js

### Api code is located in api, and the frontend app is in app .

# Api (Backend)

### Api contains 1 endpoint:

- `/` - root endpoint, serves the data for the frontend app.
- original data - https://docs.google.com/document/d/1gNCreJxAop1FH3-QJXdMZZzPL8xz4sFVGeNPxj-wsYg/edit

## Installation

```bash
$ npm install # in api/ and app/
```

## Running the api

### Api will be started at port 4000

```bash
cd api
# development
$ npm start
```

## Test

The tests written ensure:

- Sorting algorithm works

They are located in the app/ directory.
Run them with:

```bash
# unit tests
$ cd app
$ npm run test
```

# App (Frontend)

Start the frontend:

```bash
$ cd app
# run tests, optional:
# $ npm run test
$ npm i
$ npm start
```
