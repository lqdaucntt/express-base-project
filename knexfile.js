// Update with your config settings.
require('dotenv').config();
const { Env } = require('./config/index');
module.exports = {
  client: Env.DATABASE,
  connection: {
    host: Env.DB_HOST,
    database: Env.DB_DATABASE,
    user: Env.DB_USERNAME,
    password: Env.DB_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations'
  }
};
