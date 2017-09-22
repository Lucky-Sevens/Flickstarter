# Project Name

Crowdfunding and talent sourcing platform for filmmakers

## Team

- [Pavan Sethi](https://github.com/pavansethi)
- [Miles Sorce](https://github.com/milessorce)
- [Fiona Wong](https://github.com/fiona-wong)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- Yarn 1.x
- Facebook Client ID/Secret
- Stripe API key
- Cloudinary account

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
yarn install
```

## App Configuration
IMPORTANT: Due to an unknown issue with Heroku and the config module, we are currently unable to use separate default, development, and production configurations. Heroku is only accessing the default.json file, meaning the production.json db configuration must be copied over to the default.json prior to deployment. To run Flickstarter locally, keep the default.json file in its current state.

INTENDED USE: Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable.

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See https://www.npmjs.com/package/config
And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Passport OAuth Login

Follow the instructions for Passport's Facebook Strategy. This will require making a new project and app on <developer.facebook.com>. Insert your Facebook Client ID, secret, and callback URL into the config files.

## Cloudinary Configuration

Create a free account on <cloudinary.com>. Insert your cloud name and upload preset everywhere the 'openUploadWidget' method is called in this repository. This will allow you to access any media you upload while working on or using this application. If you do not need access to your uploaded media, you can skip this step.

## Stripe Configuration

Follow the instructions for Stripe’s ‘Checkout’ API.  This will require making a Stripe account entering general company information on <dashboard.stripe.com>.  Add the Publishable Key to the front-end payment component and the Test Secret Key to the payment controller.

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:

`knex migrate:latest --env NODE_ENV`

To rollback a version, run:

`knex migrate:rollback --env NODE_ENV`

To populate the database with seed data, run:

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run nodemon server: `yarn run start`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`

To create and seed db: `yarn run createdb`
