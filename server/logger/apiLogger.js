const winston = require('../node_modules/winston');
const { Rotate } = require('../node_modules/winston-logrotate/lib/winston-logrotate');

function createLogger() {
  const rotateTransport = new Rotate({
    file: `${__dirname}/logs/api_info.log`,
    colorize: false,
    timestamp: true,
    json: false,
    max: '5m',
    keep: 15,
    compress: true,
    level: 'info',
    name: 'InfoLog',
  });

  const rotateErrorTransport = new Rotate({
    file: `${__dirname}/logs/api_error.log`,
    colorize: false,
    timestamp: true,
    json: false,
    max: '5m',
    keep: 15,
    compress: true,
    level: 'error',
    name: 'ErrorLog',
  });

  return winston.createLogger({
    transports: [new winston.transports.Console(), rotateTransport, rotateErrorTransport],
  });
}

module.exports = {
  createLogger,
};
