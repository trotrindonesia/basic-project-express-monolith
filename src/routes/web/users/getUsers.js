const express = require('express');
const {
  handlers: {
    createWebHandler
  }
} = require('custom-error-exceptions');

const { getUserWebHandler: handler } = require('../../../handlers');

const router = express.Router();

router.get(
  '/users',
  createWebHandler(handler)
);

module.exports = router;
