const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../../db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  db("login")
    .join("users", "users.email", "=", "login.email")
    .where("login.email", "=", email)
    .select("users.id", "users.name", "login.hash")
    .then(data => {
      const [{ hash, name, id }] = data;
      bcrypt.compare(password, hash, (err, result) => {
        if (err) return res.json({ message: "wrong password" });
        res.json({ id, name });
      });
    })
    .catch(() => {
      res.json({ message: "email not found" });
    });

  // db("login")
  //   .where("email", email)
  //   .then(response => {
  //     const [{ hash }] = response;
  //     bcrypt.compare(password, hash, (err, result) => {
  //       if (result) {
  //         return res.send("logged in!");
  //       }
  //       res.send("invalid password...");
  //     });
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     res.send("invalid email address");
  //   });
});

module.exports = router;
