const express = require('express');
const {
  handlers: { createHandler }
} = require('custom-error-exceptions');

const { homeApiHandler: handler } = require('../../../handlers');

const router = express.Router();

router.get(
  '/',
  createHandler(handler)
);

module.exports = router;
