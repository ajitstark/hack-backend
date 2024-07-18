const Redis = require('redis');
const { redis } = require('./config');

const url = `redis://${redis.host}:${redis.port}`;
const client = Redis.createClient({ url });
if (redis.usePassword.toUpperCase() === 'YES') {
    client.auth(redis.password);
}

module.exports = client;
