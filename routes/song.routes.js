const express = require("express");
const { songController } = require("../controllers");

const router = express.Router();

router
  .get("/songs", songController.getSongs)
  .get("/song/:id", songController.getSong)
  .post("/songs", songController.createSong)
  .put("/song/:id", () => {})
  .delete("/song/:id", () => {});

exports.songRoutes = router;
