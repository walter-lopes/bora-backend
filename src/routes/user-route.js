
'use strict';

const express = require('express');
const router = express.Router();


/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Bora API",
        version: "0.0.1"
    });
});

module.exports = router;