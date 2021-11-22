const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../validation/param-validation');
const userCtrl = require('./user.controller');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /api/users - Get list of users */
router.get('/', userCtrl.list)
/** POST /api/users - Create new user */  
router.post('/', validate(paramValidation.createUser), userCtrl.register);

/** GET /api/users/:userId - Get user */
router.get('/:userId', userCtrl.get)
/** PUT /api/users/:userId - Update usebr */
router.put('/:userId', userCtrl.update)
/** DELETE /api/users/:userId - Delete user */
router.delete('/:userId', userCtrl.remove);
/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);
module.exports = router;
