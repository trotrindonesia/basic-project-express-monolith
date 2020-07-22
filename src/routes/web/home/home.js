const express = require('express');
const {
  handlers: {
    createWebHandler
  }
} = require('custom-error-exceptions');

const { homeWebHandler: handler } = require('../../../handlers');

const router = express.Router();

router.get(
  '/',
  createWebHandler(handler)
);

module.exports = router;
