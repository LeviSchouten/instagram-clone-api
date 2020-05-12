const express = require('express')
const rootRouter = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', rootRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

if (process.env.NODE_ENV === 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}
