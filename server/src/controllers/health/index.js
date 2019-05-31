/* eslint-disable func-names */
const RestClient = require('../../utility/RestClient');

const nodeHealthCheck = (req, res) => {
  res.status(200).json({
    STATUS: `Node Server running on port: ${process.env.PORT}`,
    APP_ENV: `Application Enviroment: ${process.env.APP_ENV}`,
    BUILD_NUMBER: `Build Number: ${process.env.BUILD_NUMBER}`,
  });
};

const apiHealthCheck = (req, res) => {
  const url = 'http://localhost:8080/health';
  RestClient.requestApi({
    method: 'get',
    url,
  }).then(function(resp) {
    res.send(resp.data);
  });
};

const Health = {
  nodeHealthCheck,
  apiHealthCheck,
};

module.exports = Health;
