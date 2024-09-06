const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/tasks', (req, res, next) => {
  helpers.get_tasks()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(next); 
});

router.post('/tasks', (req, res, next) => {
  helpers.create_task(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router
