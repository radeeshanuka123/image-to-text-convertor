/*const express = require("express");
const multer = require("multer");
const cors = require("cors");
const Tesseract = require("tesseract.js");
const path = require("path");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/convert", upload.single("image"), async (req, res) => {
  try {
    const imagePath = path.join(__dirname, req.file.path);

    const { data: { text } } = await Tesseract.recognize(imagePath, "eng");
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: "OCR Processing failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

*/


const express = require("express");
const multer = require("multer");
const cors = require("cors");
const Tesseract = require("tesseract.js");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

// OCR Image Processing
app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  try {
    const imagePath = path.join(__dirname, req.file.path);
    const { data } = await Tesseract.recognize(imagePath, "eng");
    fs.unlinkSync(imagePath); // Delete image after processing

    res.json({ text: data.text });
  } catch (err) {
    res.status(500).json({ error: "OCR failed", details: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
