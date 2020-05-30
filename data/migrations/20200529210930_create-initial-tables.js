
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('project', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').defaultTo(false).notNullable();
      })
      .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.string('description', 255);
      })
      .createTable('task', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.text('notes', 255);
        tbl.boolean('completed').defaultTo(false).notNullable();
        tbl.integer('project_id', 255)
          .unsigned()
          .notNullable()
          .references('project.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('project_resource', tbl => {
        tbl.integer('project_id', 255)
          .unsigned()
          .notNullable()
          .references('project.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('resource_id', 255)
          .unsigned()
          .notNullable()
          .references('resource.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        // Composite primary key because a resource cannot be allocated to
        // a project twice.
        tbl.primary(['project_id', 'resource_id']);
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('project')
      .dropTableIfExists('resource')
      .dropTableIfExists('task')
      .dropTableIfExists('project_resource')
  );
};
