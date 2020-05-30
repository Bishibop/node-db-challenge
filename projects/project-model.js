const db = require('../data/db-config.js');

async function find() {
  return db('project');
}

async function findById(id) {
  // STRETCH
  let project = await db('project').where({id: id}).first();
  project.tasks = await db('task AS t')
    .where({project_id: id})
    .select('t.id', 't.description', 't.notes', 't.completed');
  project.resources = await db('project_resource AS pr')
    .where({project_id: id})
    .join('resource AS r', 'pr.resource_id', 'r.id')
    .select('r.id', 'r.name', 'r.description');
  [project, ...project.tasks].forEach(el => {
    el.completed = el.completed ? true : false;
  })
  return project;
}

async function add(projectData) {
  let project = {...projectData};
  delete project.resourceIds;
  const ids = await db('project').insert(project);
  const addedProject = await findById(ids[0]);
  const projectResources = projectData.resourceIds.map(resourceId => {
    return {
      resource_id: resourceId,
      project_id: addedProject.id
    };
  });
  const numRowsChanged = await db('project_resource').insert(projectResources);
  return addedProject;
}

module.exports = {
  find,
  findById,
  add
}
