const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.getProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.project_name) {
      return res.status(400).json({ message: "project_name is required" });
    }
    const newProject = await Project.addProject(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
