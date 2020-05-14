const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const streamifier = require("streamifier");

const db = require("../../db");

const router = express.Router();
const upload = multer();

cloudinary.config({
  cloud_name: "db5fgl9pp",
  api_key: "215146456271458",
  api_secret: "C__Do4qBtad1Avuu4CfMykRTNho"
});

router.post("/", upload.single("file"), (req, res) => {
  const { user_id, description } = JSON.parse(JSON.stringify(req.body));
  const post = {
    user_id,
    description
  };

  const uploadStream = cloudinary.uploader.upload_stream((err, result) => {
    if (err) return;
    const { public_id, url } = result;
    post.id = public_id;
    post.url = url;

    db("posts")
      .insert(post)
      .then(console.log)
      .then(console.error);
    res.json(post);
  });

  streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
});

module.exports = router;
