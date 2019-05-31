const express = require('express');
const HealthCheckController = require('../controllers/health');

const healthRoute = express.Router();
/**
 * @
 */
healthRoute.get('/api-health', HealthCheckController.apiHealthCheck);
healthRoute.get('/node-health', HealthCheckController.nodeHealthCheck);

module.exports = healthRoute;
