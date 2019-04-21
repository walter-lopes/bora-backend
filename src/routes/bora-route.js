
'use strict';

const express = require('express');
const router = express.Router();
const controller  = require('../controllers/bora-controller');
const authService = require('../services/auth-service');

router.post('/', authService.authorize, controller.post);

module.exports = router;