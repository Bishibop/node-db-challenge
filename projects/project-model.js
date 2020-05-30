const db = require('../data/db-config.js');

async function find() {
  return db('project');
}

async function findById(id) {
  return db('project').where({id: id}).first();
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
