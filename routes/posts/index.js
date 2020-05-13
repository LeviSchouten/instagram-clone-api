const express = require('express');
const db = require('../../db');

const router = express.Router();

// router.get('/:user_id', (req, res) => {
//   const {
//     user_id
//   } = req.query;
//   console.log('hey')
//   console.log(user_id);
//   db('posts').join('users', 'posts.user_id', '=', 'users.id').where('user_id', user_id).select('*').then(data => {
//     res.json({
//       posts: data
//     })
//   });
// })

router.get('/', (req, res) => {
  if (req.query.id) {
    db('posts').join('users', 'posts.user_id', '=', 'users.id').where('user_id', req.query.id).select('*').then(data => {
      res.json({
        posts: data
      })
    });
    return;
  }

  db('posts').join('users', 'posts.user_id', '=', 'users.id').select('*').then(data => {
    res.json({
      posts: data
    })
  });
})

module.exports = router;
