const express = require('express');
const registerRouter = require('./register');
const loginRouter = require('./login');
const uploadRouter = require('./upload');
const postsRouter = require('./posts');

const router = express.Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/upload', uploadRouter);
router.use('/posts', postsRouter);

router.get('/', (req, res) => {
  res.send('server working!');
})

module.exports = router;
