const express = require('express')
const rootRouter = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.use('/', rootRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
