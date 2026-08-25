const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// GET
router.get("/", postController.getPosts);

// POST
router.post("/", postController.addPost);

// PUT
router.put("/:id", postController.updatePost);

// DELETE
router.delete("/:id", postController.deletePost);

module.exports = router;