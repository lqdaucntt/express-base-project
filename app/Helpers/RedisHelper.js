// Manual Varial.
const { client, redisClient } = require('../../config/redis');
const { EXPIRED_CACHE_TIME }  = require('../../config/index');

// Third package.
const redisDeletePattern = require('redis-delete-pattern');

const deletePattern = (pattern) => {
  redisDeletePattern({
    redis: client,
    pattern: pattern
  }, function (err) {

  })
};

/**
 * remember Save cache.
 * @param key
 * @param data
 * @param expiredTime
 * @returns {Promise<*>}
 */
const remember = async (key, data, expiredTime = EXPIRED_CACHE_TIME) => {
  try {
    let dataFromCache = await redisClient.get(key);

    if(dataFromCache) {
      return JSON.parse(dataFromCache);
    }

    data = await data();
    const dataSave = typeof data === 'object' ? JSON.stringify(data) : data;
    await redisClient.set(key, dataSave, 'EX', expiredTime);
    return data;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  deletePattern,
  remember
};
