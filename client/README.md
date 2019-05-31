## Table of Content

-  [Getting Started](#getting-started)

-  [Running in Local](#running-in-local)

-  [Folder Structure](#folder-structure)

-  [Available Scripts](#available-scripts)

	-  [yarn start](#yarn-start)

    -  [yarn build](#yarn-build)
    
    -  [yarn server](#yarn-server)

    -  [yarn test](#yarn-test)

    -  [yarn coverage](#yarn-test)

	-  [yarn lint](#yarn-lint)

    -  [yarn sass-lint](#yarn-sass-lint)

	-  [yarn lint-fix](#yarn-lint-fix)

	-  [yarn doc](#yarn-doc)

## Getting Started
This will have all the React UI code.

## Running in Local
For Running in local please click [here] to get started with the installation of the softwares and the steps.

## Folder Structure
After creation, your project should look like this:

```
|--node-react-boiler-plate/client/
    |--build/
    |   |
    |   |--static/
    |   |    |-- js
    |       This folder has the production build files which will be minified and uglified for production.
    |--config/
    |       This folder will have the webpack configuration. It has 3 files as dev, prod and common changes.
    |--docs/
    |       This folder have the code documentation for the client code.It uses JSDoc for crating the documentation.
    |--linters/
    |       This folder has the scss linter html file which will tell what are the errors and warning is there while u  
    |       run the scss lint script.
    |--node_modules/
    |       Node library for the installed dependency of the project.
    |--public/
    |       This folder has the base for the webpack to load the index.html
    |--server/
    |       This folder has the express server configuration for running the production build from the build folder.
    |--src/
    |   |   The main code for the project which will get bundled as a part of build .
    |   |   This folder has
    |   |------/actions/
    |   |           All the action will be stored here for the site.
    |   |------/core-components/
    |   |           This will have all the common core stateless components which we will using across the react
    |   |           project. 
    |   |------/modules/
    |   |           This will be the container component folder which will have all the modules like Header, Search.
    |   |------/reducers/
    |   |           This will be the root reducer for the project. Here all the reducers will be sitting.
    |   |------/sagas/
    |   |           This will have all the saga for the projects.
    |   |------/store/
    |   |           This folder has the configuration for the redux store.
    |   |------/utility/
    |   |           This folder has the utility method for the redux as well as the common utility method.
    |   |------/routes/
    |   |           This will have all the routes in for the project.
    |   |------App.js
    |   |           Here we will be rendering all the modules.
    |   |------app.scss
    |   |           scss file for the project.
    |   |------index.js
    |   |       This file will have the global project configuration for the project.
    |   |------initSaga.js
    |   |       This file is used to initialize the saga middleware
    |   |
    |--.babelrc
    |       This is used to compile some features if its not supported OOB (Out of The Box). (https://babeljs.io)
    |--.eslintrc
    |       This is a eslint configuration file used to configure the linter. (https://eslint.org)
    |--.prettierrc
    |       This is prettier configuration file. (https://prettier.io/)
    |--jsdoc.conf.json
    |       This is a global configuration file used to configure the JSDOC configuration for generating the api    
    |       documentation. (https://jsdoc.app/)
    |--.editorConfig
    |--.gitignore
    |--package.json
    |--README.md
    |--yarn.lock
```

## Available Scripts

Following are the scripts available:-

-  ### ```yarn start```
    * This script will starts the react ui application code for the project.
    * This script has can also be run using `yarn run start`
    * The webpack dev server will be running on `http://localhost:3000`

- ### ```yarn build```
    * This script is used to create the production build using webpack production configuration.
    * This will generate the build folder inside the client folder.
    * The build folder will have the minify js ans css files which will be served suing express.

- ### ```yarn server```
    * This script is used to start the production server at the given port.
    * The default post is `3000` and will start the server at `http://localhost:3000` using express.

-  ### ```yarn test```
    * This script will run all the unit test cases present in the react-ui application.
    * Anything which has `.spec` or `.test` or it sits in `__Test__` it will be treated as test file

-  ### ```yarn coverage```
    * This script will be generating the unit test coverage report for ur application.
    * This will create a folder as `coverage` and create the report there.

-  ### ```yarn lint```
    * This script is used for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of    making code more consistent and avoiding bugs.
    * This script will lint the api code for the react-ui ; script `yarn run lint` or `yarn lint` 

-  ### ```yarn sass-lint```
    * This script is is used to identify any issue with the scss files

- ### ```yarn lint-fix```
    * This script is used to automatically fix the lint issue for react-ui application.
    * This script is used to fix the react-ui code linting issue automatically. `yarn run lint-fix` or `yarn lint-fix`

-  ### ```yarn doc```
    * This script is used for documentation generator for JavaScript. This will generate documentation for react            app in the directory as `docs`.
    * The document is getting generated using `JSDOC` (https://jsdoc.app/)
    * We can use this link as a cheat sheet (https://devhints.io/jsdoc).

