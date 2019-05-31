/* eslint-disable import/no-extraneous-dependencies */
/** ******************************* How to Use it ************************************
const RestClient = require('./RestClient.js'); // location where the file is present
Input: Pass in a object with method, url, data if applicable
Output: A Promise

Ex:

RestClient.requestAPI({
  method: 'get',
  url: 'https://api.myjson.com/bins/r8lqjl'
}).then(function(resp){
  console.log(resp.data); or 
  resp.send(resp.data)
});
********************************************************************************** */
const axios = require('../../node_modules/axios');
const httpContext = require('../../node_modules/express-http-context');
const uuid = require('../../node_modules/uuid/v4');

const logger = require('../../logger');
const apiLogger = require('../../logger/apiLogger');

function getTimeDiff(startTime, endTime) {
  const diff = Math.abs(endTime.getTime() - startTime.getTime());
  return Math.round(diff);
}

const RestClient = {
  log: apiLogger.createLogger(),

  logInfo(url, method, diff, status, clientRequest) {
    let logPrefix;
    if (clientRequest) {
      logPrefix = `node:- ${clientRequest.mppUrl} Method:${method} uuid:- ${
        clientRequest.cookies['mpp.uuid']
      } | ${httpContext.get('userId') === clientRequest.cookies['mpp.uuid']}`;
    } else {
      logPrefix = '';
    }
    RestClient.log.info(
      `${logPrefix}  Request to ${url} took ${diff} ms and got responseCode: ${status}`,
    );
  },

  logError(url, method, diff, error, clientRequest) {
    let logPrefix;
    if (clientRequest) {
      logPrefix = `node:- ${clientRequest.mppUrl} Method:${method} uuid:- ${
        clientRequest.cookies['mpp.uuid']
      } | ${httpContext.get('userId') === clientRequest.cookies['mpp.uuid']}`;
    } else {
      logPrefix = '';
    }
    RestClient.log.error(
      `${logPrefix}  Request to ${url} took ${diff} ms and got responseCode: ${error}`,
    );
  },

  requestApi: options => {
    return new Promise((resolve, reject) => {
      const startTime = new Date();
      const traceId = uuid();
      const { url } = options;
      logger.info(
        `Initiated ${options.method} network call to ${
          options.url
        } traceId:${traceId} Request data: ${JSON.stringify(options.data || options.params || {})}`,
      );
      const headers = options.headers || {};
      headers.traceId = traceId;
      axios({
        method: options.method,
        url,
        data: options.data || {},
        headers,
        params: options.params || {},
        paramsSerializer: options.paramsSerializer,
        withCredentials: true,
      })
        .then(response => {
          const endTime = new Date();
          const timeTaken = getTimeDiff(startTime, endTime);
          RestClient.logInfo(
            options.url,
            options.method,
            timeTaken,
            response.status,
            options.clientRequest,
          );
          resolve(response);
        })
        .catch(error => {
          const endTime = new Date();
          const timeTaken = getTimeDiff(startTime, endTime);
          RestClient.logError(options.url, options.method, timeTaken, error, options.clientRequest);
          const errorMessage = error.response ? error.response.data : error.message;
          logger.error(
            `Recieved ${error && error.response ? error.response.status : error} from ${
              options.url
            } \n Error message: ${JSON.stringify(errorMessage)}`,
          );
          reject(error);
        });
    });
  },
};
module.exports = RestClient;
