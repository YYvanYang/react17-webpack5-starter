# How to React ^17 with Webpack 5 - Setup Tutorial

### Step 1: Following the webpack official website guide
https://webpack.js.org/guides/

### Step 2: Following the babel official website
- https://babeljs.io/setup#installation
  Please select webpack, then following the steps
- https://babeljs.io/docs/en/babel-preset-react

 **Important**
 >`runtime`
 >classic | automatic, defaults to classic
 >automatic auto imports the functions that JSX transpiles to. classic does not automatic import anything.

 备注：如果`runtime`不使用`automatic`, 且组件顶部没有引入`import React from 'react';`，则会报React不存在错误。
 ```js
 App.js:6 Uncaught ReferenceError: React is not defined
    at App (App.js:6)
    at renderWithHooks (react-dom.development.js:14985)
    at mountIndeterminateComponent (react-dom.development.js:17811)
    at beginWork (react-dom.development.js:19049)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994)
    at invokeGuardedCallback (react-dom.development.js:4056)
    at beginWork$1 (react-dom.development.js:23964)
    at performUnitOfWork (react-dom.development.js:22776)
    at workLoopSync (react-dom.development.js:22707)
react-dom.development.js:20085 The above error occurred in the <App> component:

    at App (http://localhost:8080/main.f202e1f6ecde810a7d1a.js:21:3)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
logCapturedError @ react-dom.development.js:20085
bootstrap:27 Uncaught ReferenceError: React is not defined
    at App (App.js:6)
    at renderWithHooks (react-dom.development.js:14985)
    at mountIndeterminateComponent (react-dom.development.js:17811)
    at beginWork (react-dom.development.js:19049)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994)
    at invokeGuardedCallback (react-dom.development.js:4056)
    at beginWork$1 (react-dom.development.js:23964)
    at performUnitOfWork (react-dom.development.js:22776)
    at workLoopSync (react-dom.development.js:22707)
 ```


 ### Reference
 [-] https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup
 [-] https://www.robinwieruch.de/minimal-react-webpack-babel-setup

  
