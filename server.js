const express = require("express");
const multer = require("multer");
const uuidv4 = require("uuid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4.v4() + file.originalname);
  },
});
const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.single("avatar"), uploadFiles);

function uploadFiles(req, res) {
  console.log(req.body);
  console.log(req.file);
  res.json({ message: "Successfully uploaded files" });
}
app.listen(5000, () => {
  console.log(`Server started...`);
});
