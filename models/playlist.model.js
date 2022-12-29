const { Schema, model } = require("mongoose");

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  creator: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

const Playlist = model("Playlists", playlistSchema);

module.exports = Playlist;
