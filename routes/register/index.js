const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../../db');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('registered');
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  db('users').insert({name, email})
    .then(console.log)
    .catch(console.error);
  db('login').insert({email, hash})
    .then(console.log)
    .catch(console.error);
  res.end('registered');
})

module.exports = router;
