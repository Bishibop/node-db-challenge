const db = require('../data/db-config.js');

async function find() {
  return db('resource');
}

async function findById(id) {
  return db('resource').where({id: id}).first();
}

async function add(resource) {
  const ids = await db('resource').insert(resource);
  return findById(ids[0]);
}

module.exports = {
  find,
  findById,
  add
}
