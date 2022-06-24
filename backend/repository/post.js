const db = require('../database/db');

class PostRepo {
  async createPost(authorId, text) {
    const res = await db.raw(`
      INSERT INTO "post"(author_id, text) 
      VALUES('${authorId}','${text}') 
      RETURNING id
    `);
    return res.rows[0].id;
  }
}

module.exports = new PostRepo();
