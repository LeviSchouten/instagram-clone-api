module.exports = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'levi',
    password : '',
    database : 'instagram-clone'
  }
});
