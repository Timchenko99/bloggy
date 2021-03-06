# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

To run this app you need to install next tools:
- NodeJS v17.6.0

## Installation

Before running the app install all dependencies!:

```
npm install
```

## Setting up

After successfully installing all dependencies create .env file at root level (bloggy/.env) or change the .env.example file to just .env

In your .env file you need to type next:

```
REACT_APP_API_URL="[insert_your_base_url]"
```
> [insert_your_base_url] is your real world api like "https://jsonplaceholder.typicode.com"

The above parameter will be used as base url for all requests.

## Running the app

Create React App uses Webpack under the hood so you can run this app just by running: 

```
npm start
```

## App Design

![Screenshot](https://raw.githubusercontent.com/Timchenko99/bloggy/master/screen/Screenshot_1.png)

The design is inspired by beautiful works of [David A.](https://codepen.io/meodai)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
