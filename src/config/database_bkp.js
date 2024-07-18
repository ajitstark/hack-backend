const config = require('./config');
const fs = require('fs')
const path = require('path')

module.exports = {
    development: {
        username: config.dbUser,
        password: config.dbPass,
        database: config.dbName,
        host: config.dbHost,
        port: config.dbPort,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
            ssl: {
                ca: fs.readFileSync(path.resolve(__dirname, '../../certs/ca-cert.pem')).toString(),
            }
        },
    },
    test: {
        username: config.dbUser,
        password: config.dbPass,
        database: config.dbName,
        host: config.dbHost,
        port: config.dbPort,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
            ssl: {
                ca: fs.readFileSync(path.resolve(__dirname, '../../certs/ca-cert.pem')).toString(),
            }
        },
    },
    production: {
        username: config.dbUser,
        password: config.dbPass,
        database: config.dbName,
        host: config.dbHost,
        port: config.dbPort,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
            ssl: {
                ca: fs.readFileSync(path.resolve(__dirname, '../../certs/ca-cert.pem')).toString(),
            }
        },
    },
};
