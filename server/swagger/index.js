const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Node Api Swagger Page',
      version: '1.0.0',
      description: 'Node & Express API',
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  },
  apis: ['../src/routes/*.js'],
};

const swaggerSpecs = swaggerJsdoc(options);
module.exports = swaggerSpecs;
