# Tweety

## Basic setup

The project's backend uses dotenv files to store the variables neccessary for the separation of environments. Please use `.env.sample` as an example for the needed variables.

In order to be able to both run and test this project, the mandatory setup includes running two PostgreSQL databases and adding the name of these inside the `.env` file.

To run the backend:

- go to the backend package
- run the migrations using the `npm run migrate`
- run `npm run dev`

For testing purposes:

- go to the backend package
- run the migrations using the `npm run migrate-test` before running the tests
- run the tests using `npm run test`
  The `npm run test` script will seed the test database and also run jest

## Disclaimer

The material embodied in this project are offered “as-is”, without warranty, and disclaiming liability for damages resulting from using the project. This is a personal project and does not have any connections to my employer.
