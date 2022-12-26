const express = require("express");
const { createPlaylist, getPlaylist } = require("../controllers/playlistController");

const router = express.Router();

router
  .get("/playlists", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/playlist/:id", () => {})
  .delete("/playlist/:id", () => {});

exports.playlistRoutes = router;
