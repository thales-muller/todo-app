exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id');
        table.string('name');
        table.string('email');
        table.timestamp('create_dt').defaultTo(knex.fn.now());
        table.timestamp('update_dt');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};