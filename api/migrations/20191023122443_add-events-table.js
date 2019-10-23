exports.up = async knex => {
  await knex.schema.createTable('projects', table => {
    table.uuid('id').primary();
    table.string('name');
    table.timestamp('deleted_at');
  });

  await knex.schema.createTable('events', table => {
    table.uuid('id').primary();
    table.uuid('user_id').references('users.id');
    table.enum('type', ['START_DAY', 'END_DAY', 'ISSUE', 'MEETING', 'CODE_REVIEW', 'OTHER']).notNullable();
    table.timestamp('start_time').notNullable();
    table.timestamp('end_time');
    table.uuid('project_id').references('projects.id');
    table.text('notes');
    table.string('url');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at');
  });

  await knex.schema.createTable('issues', table => {
    table.uuid('id').primary();
    table
      .uuid('event_id')
      .references('events.id')
      .onDelete('CASCADE');
    table.string('branch');
    table.integer('issue_number');
    table.decimal('estimate');
    table.string('issue_title');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at');
  });

  await knex.schema.createTable('meetings', table => {
    table.uuid('id').primary();
    table
      .uuid('event_id')
      .references('events.id')
      .onDelete('CASCADE');
    table.string('name');
  });

  await knex.schema.createTable('code_reviews', table => {
    table.uuid('id').primary();
    table
      .uuid('event_id')
      .references('events.id')
      .onDelete('CASCADE');
    table.string('reviewing_for');
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('projects');
  await knex.schema.dropTable('issues');
  await knex.schema.dropTable('meetings');
  await knex.schema.dropTable('code_reviews');
  return knex.schema.dropTable('events');
};
