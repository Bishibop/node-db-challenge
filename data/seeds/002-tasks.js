// STRETCH
exports.seed = function(knex) {
  return knex('task').insert([
    {
      project_id: 1,
      description: 'Answer the free response questions',
      completed: 1,
    },
    {
      project_id: 1,
      description: 'Build out app boilerplate',
      completed: 1,
    },
    {
      project_id: 1,
      description: 'Build router endpoints',
      completed: 1,
    },
    {
      project_id: 1,
      description: 'Build models for Projects, Resources and Tasks',
      completed: 1,
    },
    {
      project_id: 1,
      description: 'Add seed data for Projects and Tasks',
      completed: 0,
    },
    {
      project_id: 2,
      description: 'Log onto Chess.com',
      completed: 1,
    },
    {
      project_id: 2,
      description: 'Play 10 minute games because Im slow as snail',
      completed: 1,
    },
    {
      project_id: 2,
      description: 'Still blunder pieces because Im blind',
      completed: 1,
    }
  ]);
};
