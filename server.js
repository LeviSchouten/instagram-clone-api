const express = require("express");
const rootRouter = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// app.use((req, res, next) => {
//   const cookie = req.cookies.user;
//   if (cookie) return next();
//   const randomNumber = Math.random()
//     .toString()
//     .substring(2);
//   res.cookie(
//     "user",
//     { num: randomNumber },
//     { maxAge: 900000, httpOnly: false }
//   );
//   next();
// });

app.use("/", rootRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

if (process.env.NODE_ENV === "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}
