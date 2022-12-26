const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
  title: String,
  // songs
  description: String,
  creatorId: Types.ObjectId,
  createdAt: { type: Date, default: Date.now() },
  isPrivate: Boolean,
});

const Playlist = model("Playlists", playlistSchema);

exports.Playlist = Playlist;
