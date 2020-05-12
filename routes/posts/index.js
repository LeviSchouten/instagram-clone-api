const express = require('express');
const db = require('../../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*').table('posts').then(data => {
    res.json({ posts: data });
  });
})

module.exports = router;
