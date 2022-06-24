/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return createUserTable();

  function createUserTable() {
    return knex.schema.createTable('user', (table) => {
      table.increments('id');
      table.string('email').notNullable().unique();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.date('birthday').notNullable();
      table.integer('no_followers');
      table.integer('no_following');
      //for having a created at and updated at this is updated automaticaly
      table.timestamps(true, true);
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // this always has to undo what the exports.up does
  return knex.schema.dropTable('user');
};
