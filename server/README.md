## Table of Content

- [Getting Started](#getting-started)

- [Running in Local](#running-in-local)

- [Folder Structure](#folder-structure)

- [Available Scripts](#available-scripts)

  - [yarn server](#yarn-server)

        -  [yarn doc](#yarn-doc)

        -  [yarn lint](#yarn-lint)

        -  [yarn lint-fix](#yarn-lint-fix)

## Getting Started

This is a node api layer will be an orchestrator to call the external Java apis.

## Running in Local

For Running in local please click [here] to get started with the installation of the softwares and the steps.

## Folder Structure

After creation, when you go to api folder your project should look like this:

```
|--node-react-boiler-plate/server/
    |--docs/
    | 	node api layer documentation using JSDOC.
    |--logger/
    |       node api global logging configuration.
    |--src/
    |   |   The main code for the project this includes controllers, service and the routing configuration.
    |   |   This folder has
    |   |------/controllers
    |   |------/routes
    |   |------app.js
    |               This is entry point for the application
    |               Here we will be doing all the global configuration for our project.
    |--swagger/
    |       Files related to swagger configuration.
    |--server.js
    |       This is the file where we create server for our node api using Express. (https://expressjs.com/)
    |--.babelrc
    |       This is used to compile some features if its not supported OOB (Out of The Box). (https://babeljs.io)
    |--.eslintrc
    |       This is a eslint configuration file used to configure the linter. (https://eslint.org)
    |--.prettierrc
    |       This is prettier configuration file. (https://prettier.io/)
    |--jsdoc.conf.json
    |       This is a global configuration file used to configure the JSDOC configuration for generating the api
    |       documentation. (https://jsdoc.app/)
    |--nodemon.json
    |       This is a node server global configuration file used to configure the node server. (https://nodemon.io/)
	|--.editorConfig
	|--.gitignore
	|--package.json
	|--README.md
	|--yarn.lock

```

## Available Scripts

Following are the scripts available:-

- ### `yarn server`

  - This script will only starts the node api code for the project.
  - This script has can also be run using `yarn run server`
  - The server will be running on `http://localhost:5000`
  - Open `http://localhost:5000/api-docs/` to view the node api swagger-page and view the different api's available.

- ### `yarn doc`

  - This script is used for documentation generator for JavaScript. This will generate documentation for api in the directory as `docs`.
  - The document is getting generated using `JSDOC` (https://jsdoc.app/)
  - We can use this link as a cheat sheet (https://devhints.io/jsdoc).

- ### `yarn lint`

  - This script is used for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  - This script will lint the api code for the project ; script `yarn run lint` or `yarn lint`

- ### `yarn lint-fix`
  - This script is used to automatically fix the lint issue for api.
  - This script is used to fix the react-ui code linting issue automatically. It will move to the client folder and run the script as `yarn run lint-fix` or `yarn lint-fix`
