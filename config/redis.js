// Third packages.
const  asyncRedis = require('async-redis');
const redis = require('redis');

// Modules.
const { Env } = require('./index');

const redisClient = asyncRedis.createClient({
  host: Env.REDIS_HOST || 'localhost',
  port: Env.REDIS_PORT || '6379',
  prefix: Env.REDIS_PREFIX || ''
});

const client = redis.createClient({
  host: Env.REDIS_HOST || 'localhost',
  port: Env.REDIS_PORT || '6379'
});

module.exports = {
  redisClient,
  client
};
