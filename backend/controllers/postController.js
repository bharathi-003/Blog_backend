const db = require("../config/db");

// GET all posts
exports.getPosts = (req, res) => {
  db.query("SELECT * FROM posts ORDER BY created_at DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// ADD new post
exports.addPost = (req, res) => {
  const { title, content, category, tags, published } = req.body;

  const sql =
    "INSERT INTO posts (title, content, category, tags, published) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [title, content, category, tags, published], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Post Added Successfully" });
  });
};

// UPDATE post
exports.updatePost = (req, res) => {
  const { title, content, category, tags, published } = req.body;
  const { id } = req.params;

  const sql =
    "UPDATE posts SET title=?, content=?, category=?, tags=?, published=? WHERE post_id=?";

  db.query(sql, [title, content, category, tags, published, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Post Updated Successfully" });
  });
};

// DELETE post
exports.deletePost = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM posts WHERE post_id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Post Deleted Successfully" });
  });
};