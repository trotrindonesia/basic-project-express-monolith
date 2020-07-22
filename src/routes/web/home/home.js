const express = require('express');

const { createWebHandler } = require('../../../utils');
const { homeWebHandler: handler } = require('../../../handlers');

const router = express.Router();

router.get(
  '/',
  createWebHandler(handler)
);

module.exports = router;
