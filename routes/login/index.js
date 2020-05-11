const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../../db');

const router = express.Router();

router.post('/', async (req, res) => {
  const {email, password } = req.body;

  db('login').where('email', email)
  .then(response => {
    const [{ hash }] = response;
    bcrypt.compare(password, hash, (err, result) => {
      if (result) return res.send('logged in!');
      res.send('invalid email or password...');
    });
  })
})

module.exports = router;
