const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({ count: posts.length, posts });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.createNewPost = async (req, res, next) => {
  let { title, body } = req.body;

  let newPost = new Post(title, body);

  try {
    newPost = await newPost.save();
    res.status(201).json({ message: 'Post created' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const [post, _] = await Post.findById(id);
    res.status(200).json({ post: post[0] });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
