const v1 = require('./v1');
const api = require('express').Router();

api.use('/v1', v1);

module.exports = api;
