const express = require("express");
const { createSong, getSong } = require("../controllers/songController");

const router = express.Router();

router
  .get("/songs", getSong)
  .post("/songs", createSong)
  .put("/song/:id", () => {})
  .delete("/song/:id", () => {});

exports.songRoutes = router;
