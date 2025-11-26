const { log } = require('node:console');


require('dotenv').config();

const config = {
    app: {
        appName: process.env.APP_NAME || 'MyApp',
        appEnv: process.env.APP_ENV || 'production',
        appUrl: process.env.APP_URL || 'http://localhost',
        logChannel: process.env.LOG_CHANNEL || 'single',
        dbConnection: process.env.DB_CONNECTION || 'sqlite',
        nodeEnv: process.env.NODE_ENV || 'production',
        port: process.env.PORT || 8080,
    }
}

console.log(config.app);


module.exports = config;