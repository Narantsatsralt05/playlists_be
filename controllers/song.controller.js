const { Song } = require("../models");

const createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};

const getSongs = async (req, res) => {
  const result = await Song.find({});
  res.send(result);
};

const getSong = async (req, res) => {
  const result = await Song.findById(req.params.id);
  res.send(result);
};

module.exports = { createSong, getSongs, getSong };
