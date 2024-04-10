const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/comment', async (req, res) => {
  const { commentName, commentText, userName } = req.body;

  try {
    const newComment = await Comment.create({
      commentName,
      commentText,
      userName
    });

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/comment/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findByPk(id, {
      include: 'user',
    });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(comment);
  } catch (error) {
    console.error('Error fetching comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
