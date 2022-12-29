const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const {
  playlistRoutes,
  songRoutes,
  artistRoutes,
  userRoutes,
} = require("./routes");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connect();

app.use(playlistRoutes);
app.use(songRoutes);
app.use(artistRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world :))");
});

app.listen(port, () => {
  console.log("Server running at:", port);
});
