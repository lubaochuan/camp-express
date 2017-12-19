# camp-express

This project implements a web service backend for mobile apps for camp users.
Admins can update camp information through a web service interface and mobile
apps pull the information through a similar web service interface. The goal is
to allow non-technical users to easily update the content of the mobile app
through a web interface. The mobile app is being developed as another open
source project.

We will use full-stack JavaScript development and more specifically Express for
web server, MongoDB for database, and React for web client.

## Learning resources
* Node University has a number of free books/courses: https://node.university/courses/
* Official React website has tutorials: https://reactjs.org/

## Contribution
Please contribute using pull requests. We will need to work out some guidelines
regarding style and workflow.

## Testing the app
After cloning the app, open a terminal to the root folder of the app and run `yarn install-client` to install dependencies for both the Express and React app.

Next, run `yarn build-client` to generate a production build of the React app. This is necessary because Express serves the static files located in `/client/build`. 

Finally, run `yarn start` to start the Node server and view the React app. 

The app displays a single string which demonstrates hitting an API endpoint on the Express backend and serving the result to the React client.
