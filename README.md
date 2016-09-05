# PWA Tips ![build](https://travis-ci.org/code-kotis/pwa-tips.svg?branch=master)

*A tips site for developing progressive web applications*

## Folder Structure

```
pwa-tips/
  index.html
  favicon.ico
  node_modules/
  package.json
  src/
    App.css
    App.js
    index.css
    index.js
    logo.svg
  test/
    App.test.js
  README.md
  deploy.sh
```

For the project to build, **these files must exist with exact filenames**:

* `index.html` is the page template;

* `favicon.ico` is the icon you see in the browser tab;

* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
