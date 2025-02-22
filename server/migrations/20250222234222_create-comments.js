exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
        table.increments('id');
        table.integer('user_id');
        table.integer('todo_id');
        table.string('text');
        table.timestamp('create_dt').defaultTo(knex.fn.now());
        table.timestamp('update_dt');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};