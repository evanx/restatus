
const redis = require('redis');

const redisLogger = require('./index');

const config = {
     redisHost: 'localhost', 
     redisPort: 6379,
     redisNamespace: 'test-redis-logger',
};

const logger = redisLogger(config, redis);

const error = {
   name: 'DataError',
   message: 'Test error',
   data: 'Test data'
};

logger.debug(error);

setTimeout(() => logger.end(), 1000);
