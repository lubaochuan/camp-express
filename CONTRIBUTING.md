# Contribution Guide

Fork the camp-express repository and contribute using pull requests. Even if you have push access to the repository, please create a pull request to allow for code review.

## Setting up the development environment

### Installation

* Install [Node 8](https://nodejs.org/en/) or above

* Install [MongoDB 3.6](https://docs.mongodb.com/manual/administration/install-community/)

* Install [Yarn Package Manager](https://yarnpkg.com/en/docs/install) (recommended)

Then, run `npm install` or `yarn` in the root folder of the repository to install dependencies for the client, server, and dev tools.

## Running the apps

The client and server application are included in the same repository.

### Express Server

Run `npm run start` or `yarn start` inside of the server folder. The server is run at localhost:5000 by default

### React Client

Run `npm run start` or `yarn start` inside of the client folder. This will run a development web server at localhost:3000.

### MongoDB

In order to use MongoDB, you must have the `mongod` service running. See the MongoDB docs for more details. Normally, after MongoDB has been installed on your machine, this is as simple as running `mongod` in a terminal window.

## Editors

ESLint and Prettier are configured for this application. They are not yet built into the app's build tools. Please use the appropriate editor extension to use ESLint and Prettier.

## Commiting

This app uses [commitizen](https://github.com/commitizen/cz-cli) for standardizing commit messages. When making a commit, use `npm run commit` or `yarn commit` in the root of the project to stage any changes and bring up the commitizen prompt.

## Release

Run `yarn release` to run standard-version. This will update the changelog based off of conventional commits, bump the version in package.json, commit the changes, and tag the commit with the new version.

After running the above command, create a new branch off of master called release-version where version is the version on the commit just tagged by standard-version.

Do not edit the release branch further. If you must make a hotfix for the release, make the change on master, then rebase the release branch to be based on the latest master. Details can be found in the project wiki page named Proposed Git Workflow.

## Testing

### Express Server

Do not use `yarn test` directly. This command is run by Travis CI after a commit is made to master. The command output is not in a human-readable format and is read by Coveralls to display a badge of test coverage in the README. If you would like to run your tests before submitting a pull request (as you should), use `yarn test-local`.

If you want to keep testing your changes to tests, forward the `--watch` option to the test command by running `yarn test-local --watch`. This will cause the tests to run every time a change is made to a test file.

### React Client

Run `npm run test` or `yarn test` to have [Jest](https://facebook.github.io/jest/) watch the test files for changes.
