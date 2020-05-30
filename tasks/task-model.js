const db = require('../data/db-config.js');

async function find() {
  return db('task AS t')
    .join('project AS p', 't.project_id', 'p.id')
    .select('t.*',
            'p.name AS project_name',
            'p.description AS project_description');
}

async function findById(id) {
  return db('task').where({id: id}).first();
}

async function add(task) {
  const ids = await db('task').insert(task);
  return findById(ids[0]);
}

module.exports = {
  find,
  findById,
  add
}
