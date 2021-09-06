const router = require('express').Router();

const { navigate } = require('./service');

router.get('/', navigate);

module.exports = router;