const db = require('../database/db');

class PostRepo {
  async createPost(authorId, text) {
    const res = await db.raw(`
      INSERT INTO "post"(author_id, text) 
      VALUES('${authorId}','${text}') 
      RETURNING id, text, created_at
    `);
    return res.rows[0];
  }

  async getPostsByAuthorId(authorId) {
    const res = await db.raw(`
    SELECT *
    FROM "post"
    WHERE author_id='${authorId}'
  `);
    return res.rows;
  }
}

module.exports = new PostRepo();
