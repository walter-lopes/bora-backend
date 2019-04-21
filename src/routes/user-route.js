
'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

/**
 * This function comment is parsed by doctrine
 * @route POST /users
 * @group users - Operations about user
 * @param {Point.model} point.body.required - the new point
 * @param {string} firstname.query.required - user's firstname
 * @param {string} lastname.query.required - user's lastname
 * @param {string} nickname.query.required - user's nickname
 * @param {string} email.query.required - user's email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);

module.exports = router;