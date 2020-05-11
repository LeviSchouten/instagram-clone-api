const express = require('express')
const rootRouter = require('./routes');
// const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(express.json());

app.use('/', rootRouter);

app.listen(port, () => console.log(`Listening on port ${port}`))
