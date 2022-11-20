const mongoose = require('mongoose');
const { Schema } = mongoose;

const battingSchema = new Schema({
    videoTitle:{
        type: String
    },
    videoUrl:{
        type: String
    }
    });
    
  const Battingcontent = mongoose.model('Battingcontent', battingSchema);
  module.exports = Battingcontent;
  