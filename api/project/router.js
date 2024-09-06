const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/projects', (req, res, next) => {
  helpers.get_projects()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(next); 
});

router.post('/projects', (req, res, next) => {
  helpers.create_project(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router
