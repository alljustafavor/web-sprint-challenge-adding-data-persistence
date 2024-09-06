const db = require('../../data/dbConfig');

const getTasks = () => {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    .then(tasks => tasks.map(task => ({
      ...task,
      task_completed: Boolean(task.task_completed)
    })));
};

const addTask = async (task) => {
  const [id] = await db('tasks').insert(task);
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .where('t.task_id', id)
    .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    .first()
    .then(task => ({
      ...task,
      task_completed: Boolean(task.task_completed)
    }));
};

module.exports = {
  getTasks,
  addTask
};
