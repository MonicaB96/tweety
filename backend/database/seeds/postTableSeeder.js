/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // Doc says that it's better to use truncate() instead of del(),
  // because we want the primary key to also be reseted
  await knex('post').truncate();
  await knex('post').insert([
    {
      author_id: 1,
      text: 'Hello',
      no_likes: 0,
      no_comments: 0,
      no_retweets: 0,
    },
  ]);
};
