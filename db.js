module.exports = require('knex')(
  process.env.NODE_ENV === 'production' 
  ? {
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl: true
    }
  }
  : {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'levi',
      password : '',
      database : 'instagram-clone'
    }
  }
);
