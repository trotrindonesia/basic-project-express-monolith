const express = require('express');
const {
  handlers: { createHandler }
} = require('custom-error-exceptions');

const { getUserApiHandler: handler } = require('../../../handlers');

const router = express.Router();

router.get(
  '/users',
  createHandler(handler)
);

module.exports = router;
