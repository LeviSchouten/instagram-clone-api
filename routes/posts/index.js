const express = require("express");
const db = require("../../db");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("request gets here..");

  if (req.query.id) {
    db("posts")
      .join("users", "posts.user_id", "=", "users.id")
      .where("user_id", req.query.id)
      .select("*")
      .then(data => {
        res.json({
          posts: data
        });
      });
    return;
  }

  db("posts")
    .join("users", "posts.user_id", "=", "users.id")
    .select("*")
    .then(data => {
      res.json({
        posts: data
      });
    });
});

module.exports = router;
