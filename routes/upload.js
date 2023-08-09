var express = require("express");
var router = express.Router();
const multer = require("multer");
const uuidv4 = require("uuid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4.v4() + file.originalname);
  },
});
const upload = multer({ storage: storage });

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("avatar here");
});
router.post("/", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
  return res.send({
    status: 200,
    file: req.file.filename,
    message: "Successfully uploaded files",
  });
});

module.exports = router;
