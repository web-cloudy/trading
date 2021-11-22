const express = require('express');
const validate = require('express-validation');
const expressJwt = require('express-jwt');
const paramValidation = require('../../validation/param-validation');
const authCtrl = require('./auth.controller');
const config = require('../../config/config');

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.post('/login', validate(paramValidation.login), authCtrl.login)

router.post('/verify', authCtrl.verify)

router.post('/forgotpassword', authCtrl.forgotPassword)

router.post('/resetPassword', authCtrl.resetPassword)

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.get('/random-number', expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber)
module.exports = router;
