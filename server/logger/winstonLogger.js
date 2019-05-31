/* eslint-disable new-cap */
const winston = require('../node_modules/winston');

winston.level = 'info';

const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      name: 'info_log',
      filename: 'info.log',
      level: 'info',
    }),
    new winston.transports.File({
      name: 'error_log',
      filename: 'error.log',
      level: 'error',
    }),
  ],
});

winston.loggers.get('galatica').info('Logger initiated');
module.exports = logger;
