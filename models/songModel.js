const { Schema, Types, model } = require("mongoose");

const songSchema = new Schema({
  playlistId: Types.ObjectId,
  name: String,
  artist: String,
  duration: Number,
  createdAt: { type: Date, default: Date.now() },
  url: String,
});

const Song = model("Songs", songSchema);

exports.Song = Song;
