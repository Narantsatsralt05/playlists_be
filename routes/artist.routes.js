const express = require("express");
const { artistController } = require("../controllers");

const router = express.Router();

router
  .get("/artists", artistController.getArtists)
  .get("/artists/:id", artistController.getArtist)
  .post("/artists", artistController.createArtist)
  .put("/artists/:id", () => {})
  .delete("/artists/:id", () => {});

exports.artistRoutes = router;
