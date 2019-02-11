This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



-------------------------------------------------TODO----------------------------
13.11.2018
1. add form
2. add custom component
3. use redux for actions
4. use som mixin
5. add more scss variables
6. deploy to surge
----------------------------------09.12.2018
to analyze performace go to localhost:3000/?react_perf
add react addons per
import it in app component and place on window.Perf = Perf;
Perf.start() in component did mount in set imediate
in set timeout in 5s call stop and print wasted
Perf.stop();
Perf.printWasted();

try to use react pure component
npm install --save why-did-you-update

------------------------------
auth :
1 install deps > npm install auth0-js@9.8.0 auth0-lock@11.10.0 express@4.16.3 express-jwt@5.3.1 express-jwt-authz@1.0.0 jwks-rsa@1.3.0 npm-run-all@4.1.3 react-router-dom@4.3.1

2 . sign in to auth0 and create application.
3. create .env file with auth env variable
4. create auth.ts class with props and methods for authorization
5.in app.ts create instance of auth.ts file (in constructor
6. pass auth object to other components
7. in dashboard add login button


- Apply  authentication from pluralsight
- use react transition group
- create interceptor
- add iframes with videos
- deploy to heroku
- upload and save photo