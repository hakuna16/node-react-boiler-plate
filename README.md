## Table of Content

-  [Getting Started](#getting-started)

-  [Running in Local](#running-in-local)

-  [Folder Structure](#folder-structure)

-  [Available Scripts](#available-scripts)

    -  [yarn install](#yarn-install)

	-  [yarn start](#yarn-start)

	-  [yarn lint](#yarn-lint)

	-  [yarn doc](#yarn-doc)

	-  [yarn lint-fix](#yarn-lint-fix)

-  [Raising Pull Request](#raising-pull-request)

## Getting Started
- We are using **yarn** as a package manager so please don't do any **npm install** .
	- **yarn** is also same as **npm**.
-  VS code or preferred editor of your choice.

**Node js:**     	
Download node js : [here](https://nodejs.org/en/)  
After installing node : check for version of node and npm (node package manager )using
```
node -v 
v11.7.0  or (LATEST)
npm -v 
6.5.0   or (LATEST)
```
**Installing yarn package manager :**
*On MAC:*  
```
brew install yarn --without-node
```
after installing yarn check using  
```
yarn -v / yarn –version
```
To Upgrade Yarn  
```
brew upgrade yarn
```
Test that Yarn is installed by running:  
```
yarn -v / yarn --version
```
On Linux / CentOs  
```
sudo yum install yarn
```
***VsCode download:***  
			- For Mac , Linux and Windows User [download](https://code.visualstudio.com/)
*For Mac user :*  
- UnZip it and add it to the application

*For Cent-Os user* :  
- Go to the download Location, open terminal and use  
```sudo rpm -i <filename>.rpm```

**Extensions For VS Code :**
***Important :***
-   code-runner : Running vanila javaScript code.
-   ESLint : Integrates ESLint JavaScript into VS Code.
-   Prettier - Code formatter: VS Code plugin for prettier/prettier

**Helpers:**
-   **Auto Close Tag** : Automatically add HTML/XML close tag.
-   **Color Highlight** : Highlight web colors in your editor.
-   **Bracket Pair Coloriser** : A customisable extension for colorising matching brackets
-   **Color Picker** : Helper with GUI to generate color codes such as CSS color notations
-   **JavaScript (ES6) code snippets** : Code snippets for JavaScript in ES6 syntax
-   **Node.js Modules Intellisense**
-   **npm** : npm support for VS Code
-   **npm Intellisense :** plugin that autocomplet npm modules in import statements
-   **Path Intellisense** : Visual Studio Code plugin that autocompletes filenames
-   **SCSS Intellisense** - Advanced autocompletion and refactoring support for SCSS

## Running in Local

### Pre-requisites: 
  These 3 are pre-requisites
  - vs code
  - node js
  - yarn (as a package manager)

  Also please add the vs-code extensions for better coding standards.

  You should have node version >= 8.5.4 

 1. Clone the repository.
 2. Update the package using 
		  ``` yarn install ```
          <br/>
		  Here you will see all the modules and the dependency getting downloaded.
          <br/>
          This will install dependency for both client and api.
 3. To start the local server : 
		 ``` yarn start  ```
         <br/>
		 This will start the local react server on : ``` http://localhost:3000```
         <br/>
         and
         <br/>
         This will start the local api server on : ``` http://localhost:5000```

Happy Coding !!!

## Folder Structure
After creation, your project should look like this:

```
|--node-react-boiler-plate/
    |--api/
    |	node api layer
    |--client/
    |   react-ui layer code.
    |--node_modules/
    |   node js modules
    |--.editorConfig
    |--.gitignore
    |--package.json
    |--README.md
    |--yarn.lock
```

## Available Scripts
Following are the scripts available:-
-  ### ```yarn install```
    * This script is used to install the dependency for both client and api code.
    * This script has two sub script as
        - ### yarn run update:client
            - This script will only install or update the react ui code dependency for the project. It will first move to the client folder and run the script `yarn`.<br/>
        - ### yarn run update:server
            - This script will only install or update the api code dependency for the project. It will first move to the api folder and run the script `yarn`.<br/>
        - Both `yarn` and `yarn install` is same.

-  ### ```yarn start```
	* Runs the application in the development mode.
    * This script has two sub script as
        - ### yarn run client
            - This script will only starts the react ui code for the project. It will first move to the client folder and   run the script `yarn start`
        - ### yarn run server
            - This script will only starts the node api code for the project. It will first move to the api folder and      run the script `yarn run server` or `yarn server`
	*  Open `http://localhost:3000` to view the react ui application it in the browser.

    *  Open `http://localhost:5000/api-docs/` to view the node api swagger-page and view the different api's available.

-  ### ```yarn lint```
    * This script is used for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of    making code more consistent and avoiding bugs.
    * This script has two sub script as
        - ### yarn run lint:client
            - This script will only lint the react ui code for the project. It will first move to the client folder and     run the script `yarn run lint` or `yarn lint`
         - ### yarn run lint:server
            - This script will only lint the api code for the project. It will first move to the api folder and run the     script `yarn run lint` or `yarn lint` 

-  ### ```yarn doc```
    * This script is used for documentation generator for JavaScript. This will generate documentation for both             client and api in their respective directory as `docs`.
    * The document is getting generated using `JSDOC` (https://jsdoc.app/)
    * This script has two sub script as
        - ### yarn run doc:client
            - This script is used to generate the react client application documentation. It will first move to the         client folder and run the script `yarn doc` or `yarn run doc`.
        - ### yarn run doc:client
             - This script is used to generate the node api application documentation. It will first move to the             api folder and run the script `yarn doc` or `yarn run doc`.
    * We can use this link as a cheat sheet (https://devhints.io/jsdoc).

- ### ```yarn lint-fix```
    * This script is used to automatically fix the lint issue for the whole code base.
    * This scrip has two sub script
        - ### yarn run lint-fix:server 
            - This script is used to fix the api code linting issue automatically. It will move to the api folder and run   the script as `yarn run lint:fix` or `yarn lint:fix`
         - ### yarn run lint-fix:client 
            - This script is used to fix the react-ui code linting issue automatically. It will move to the client folder   and run the script as `yarn run lint:fix` or `yarn lint:fix`

## Raising Pull Request

Please make sure few things before raising Pull Request.

### Problem:
    <Brief overview of problem>
    Jira ticket:< Link_to_jira>

###  Solution:
- Brief description of what was implemented and how ?
- highlight any considerations that are important to call out 

### Testing:
     [ ] All acceptance criteria met

### Checklist (Important)
Please ensure the branch and pull request adhere to the following checklist prior to merging.

- [ ] There are no `package-lock.json` files... an indication `npm` has been used instead of `yarn`.
- [ ] Dependencies and devDependencies are all listed in the `package.json`, and are the correct way round.
- [ ] Linting passes on the branch without any errors or warnings.
