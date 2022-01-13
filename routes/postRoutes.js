const {
  getAllPosts,
  createNewPost,
  getPostById,
} = require('../controllers/postControllers');

const router = require('express').Router();

router.route('/').get(getAllPosts);
router.route('/').post(createNewPost);
router.route('/:id').get(getPostById);

module.exports = router;
