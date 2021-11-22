const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../validation/param-validation');
const tradeCtrl = require('./trade.controller');

const router = express.Router(); // eslint-disable-line new-cap
  /** GET /api/trades - Get list of trades */
router.get('/', tradeCtrl.listTrade)
/** POST /api/trades - Create new trades */
router.post('/create', tradeCtrl.createTrade)
router.put('/', tradeCtrl.updateTrade)
// router.put('/', function(req, res) {
//   console.log("dfd")
// })

module.exports = router;
