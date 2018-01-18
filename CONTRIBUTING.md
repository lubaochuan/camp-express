# Contribution Guide

## Installation

Run `yarn install-client` to install dependencies for the Express and React app.

## Building the Client App

Run `yarn build-client` to build the React code to be loaded by Express.

## Starting the app

You must build the client with `yarn build-client` in order for the Express server to load the client. This is because the server only loads built files from React and cannot serve an unbuilt React app.

After building the client, run `yarn start` to start the Express server. Then navigate to the specified port of localhost to view the React app.

## Commiting

Use `yarn commit` to bring up the commitizen prompt. Do not use `git commit`. This app uses the conventional changelog specification for git commits. Details are found in the commitizen and conventional changelog documentation.

## Release

Run `yarn release` to run standard-version. This will update the changelog based off of conventional commits, bump the version in package.json, commit the changes, and tag the commit with the new version.

After running the above command, create a new branch off of master called release-version where version is the version on the commit just tagged by standard-version.

Do not edit the release branch further. If you must make a hotfix for the release, make the change on master, then rebase the release branch to be based on the latest master. Details can be found in the project wiki page named Proposed Git Workflow.

## Testing

Do not use `yarn test` directly. This command is run by Travis CI after a commit is made to master. The command output is not in a human-readable format and is read by Coveralls to display a badge of test coverage in the README. If you would like to run your tests before submitting a pull request (as you should), use `yarn test-local`.

If you want to keep testing your changes to tests, forward the `--watch` option to the test command by running `yarn test-local --watch`. This will cause the tests to run every time a change is made to a test file.
