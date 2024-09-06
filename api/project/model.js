const db = require('../../data/dbConfig');

const getProjects = () => {
  return db('projects')
    .select('project_id', 'project_name', 'project_description', 'project_completed')
    .then(projects => projects.map(project => ({
      ...project,
      project_completed: Boolean(project.project_completed)
    })));
};

const addProject = async (project) => {
  const [id] = await db('projects').insert(project);
  return db('projects')
    .where('project_id', id)
    .first()
    .then(project => ({
      ...project,
      project_completed: Boolean(project.project_completed)
    }));
};

module.exports = {
  getProjects,
  addProject
}
