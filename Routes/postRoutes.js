const express = require("express");
const Post = require("../Schemas/postSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/findPost", async (req, res) => {
  try {
    const posts = await Post.find({ name: req.query.findPost });
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.category });
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/author/:author", async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.author });
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/tags/:tag", async (req, res) => {
  try {
    const posts = await Post.find({ tags: req.params.tag });
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});
router.post("/", async (req, res) => {
  const posts = new Post({
    name: req.body.name,
    category: req.body.category,
    tags: req.body.tags,
    author: req.body.author,
    description: req.body.description,
  });
  posts
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;
