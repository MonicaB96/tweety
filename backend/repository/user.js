const db = require('../database/db');

class UserRepo {
  async exists(id) {
    const res = await db.raw(`
      SELECT * 
      FROM "user" 
      WHERE id = '${id}'
    `);
    return res.rowCount > 0;
  }

  async emailExists(email) {
    const res = await db.raw(`
      SELECT * 
      FROM "user" 
      WHERE email='${email}'
    `);
    return res.rowCount > 0;
  }

  async getUserByEmail(email) {
    const res = await db.raw(`
      SELECT * 
      FROM "user" 
      WHERE email='${email}' 
      LIMIT 1
    `);
    return res.rows[0];
  }

  async createUser(email, firstName, lastName, birthday) {
    const res = await db.raw(`
      INSERT INTO "user"(email, first_name, last_name, birthday, no_followers, no_following) 
      VALUES('${email}','${firstName}', '${lastName}', '${birthday}', 0, 0) 
      RETURNING id
    `);
    return res.rows[0].id;
  }
}

module.exports = new UserRepo();
