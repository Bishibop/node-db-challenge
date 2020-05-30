// STRETCH
exports.seed = function(knex) {
  return knex('project').insert([
    {
      name: 'DB Sprint Challenge',
      description: 'Prove that I understand how to work with databases',
      completed: 0,
    },
    {
      name: 'Play chess',
      description: 'Lose more elo in chess',
      completed: 1,
    },
  ]);
};
