'use strict';

const { Env } = require('./index');

const databaseEngine = Env.DATABASE || 'mysql';
const database = {
  mysql: {
    host: Env.DB_HOST || 'localhost',
    user: Env.DB_USERNAME || 'root',
    password: Env.DB_PASSWORD || '',
    database: Env.DB_DATABASE || 'my_database'
  }
};

module.exports = database[databaseEngine];
