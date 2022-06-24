/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // Doc says that it's better to use truncate() instead of del(),
  // because we want the primary key to also be reseted
  await knex('user').truncate();
  await knex('user').insert([
    {
      email: 'email1@email.com',
      first_name: 'FirstName1',
      last_name: 'LastName1',
      birthday: new Date(2003, 01, 15),
      no_followers: 0,
      no_following: 1,
    },
    {
      email: 'email2@email.com',
      first_name: 'FirstName2',
      last_name: 'LastName2',
      birthday: new Date(2000, 05, 27),
      no_followers: 2,
      no_following: 1,
    },
    {
      email: 'email3@email.com',
      first_name: 'FirstName3',
      last_name: 'LastName3',
      birthday: new Date(1997, 03, 12),
      no_followers: 2,
      no_following: 0,
    },
  ]);
};
