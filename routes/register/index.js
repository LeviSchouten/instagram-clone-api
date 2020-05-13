const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../../db');
const uuid = require('uuid').v4;

const router = express.Router();

const pad = num => ('00' + num).slice(-2);
const date = new Date();
const createdAt = `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`


router.post('/', async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const id = uuid();

  // refactor later (async await?)
  db('users').insert({
      name,
      email,
      id,
      created_at: createdAt
    })
    .then(() => {
      db('login').insert({
          email,
          hash
        })
        .then(() => {
          res.json({
            id
          })
        })
        .catch(console.error)
    })
    .catch(() => {
      res.status(403).end('Email already exists..');
    });
})

module.exports = router;
