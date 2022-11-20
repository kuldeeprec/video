const mongoose = require('mongoose');
const { Schema } = mongoose;

const bowlingSchema = new Schema({
    videoTitle:{
        type: String
    },
    videoUrl:{
        type: String
    }
    });

  const Bowlingcontent = mongoose.model('Bowlingcontent', bowlingSchema);
  module.exports = Bowlingcontent;
  