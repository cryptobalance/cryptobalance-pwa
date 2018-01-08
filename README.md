# Crypto Balance

A Progressive Web App (PWA) built using Polymer.

Hosted at https://lirre8.github.io/crypto-balance.

## Setup the local dev environment

### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) using
[npm](https://www.npmjs.com) (we assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli

Second, install [Bower](https://bower.io/) using [npm](https://www.npmjs.com)

    npm install -g bower

### Install dependencies

Run the following commands in the repository root directory:

    npm install

    npm run browserify

### Start the development server

This command serves the app at `http://localhost:8081` and provides basic URL
routing for the app:

    polymer serve

### Build for production

    polymer build

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    polymer test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)
