/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname + '../../.env') });

module.exports = {
  test: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_TEST_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
