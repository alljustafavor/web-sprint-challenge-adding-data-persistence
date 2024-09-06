const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.task_description) {
      return res.status(400).json({ message: "task_description is required" });
    }
    if (!req.body.project_id) {
      return res.status(400).json({ message: "project_id is required" });
    }
    const newTask = await Task.addTask(req.body);
    if (!newTask) {
      return res.status(404).json({ message: "The project with the specified project_id does not exist" });
    }
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
