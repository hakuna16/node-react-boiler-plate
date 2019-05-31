const httpContext = require('../node_modules/express-http-context');
const winstonLogger = require('./winstonLogger.js');

function info(msg, req) {
  try {
    let logPrefix;
    if (req) {
      logPrefix = `node:-${req.mppUrl} | ${httpContext.get('userId')}`;
    } else {
      logPrefix = '';
    }

    const log = `${logPrefix}  Message:- ${msg}`;
    winstonLogger.info(log);
  } catch (e) {
    winstonLogger.info(`Error in logger >>  Original info message:${msg}`);
  }
}

function error(msg, req) {
  try {
    let logPrefix;
    if (req) {
      logPrefix = `node:-${req.mppUrl} | ${httpContext.get('userId')}`;
    } else {
      logPrefix = '';
    }

    const log = `${logPrefix}  Message:- ${msg}`;
    winstonLogger.error(log);
  } catch (e) {
    winstonLogger.error(`Error in logger >>  Original error message:${msg}`);
  }
}
const logger = {
  info,
  error,
};
module.exports = logger;
