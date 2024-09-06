const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/resources', (req, res, next) => {
  helpers.get_resources(req.params.id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post('/resources', (req, res, next) => {
  helpers.create_resource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router
