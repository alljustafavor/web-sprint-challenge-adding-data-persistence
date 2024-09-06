const db = require('../../data/dbConfig');

const getResources = () => {
  return db('resources').select('resource_id', 'resource_name', 'resource_description');
};

const addResource = async (resource) => {
  const [id] = await db('resources').insert(resource);
  return db('resources').where('resource_id', id).first();
};

module.exports = {
  getResources,
  addResource
}
