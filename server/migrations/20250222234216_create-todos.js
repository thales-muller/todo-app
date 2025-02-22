
exports.up = function(knex) {
    return knex.schema.createTable('todos', function(table) {
        table.increments('id');
        table.integer('owner_id');
        table.integer('assignee_id');
        table.string('title');
        table.integer('order');
        table.boolean('completed').defaultTo(false);        
        table.string('description');
        table.string('status').defaultTo('ToDo');
        table.timestamp('due_dt');
        table.timestamp('create_dt').defaultTo(knex.fn.now());
        table.timestamp('update_dt');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos');
};