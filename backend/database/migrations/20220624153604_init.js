/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return createPostTable();

  function createPostTable() {
    return knex.schema.createTable('post', (table) => {
      table.increments('id');
      table.string('author_id').notNullable();
      table.string('text').notNullable();
      table.integer('no_likes');
      table.integer('no_comments');
      table.integer('no_retweets');
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
  return dropPostTable();
  function dropPostTable() {
    knex.schema.dropTable('post');
  }
};
