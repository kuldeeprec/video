const mongoose = require('mongoose');
const { Schema } = mongoose;

const fieldingSchema = new Schema({
    videoTitle:{
        type: String
    },
    videoUrl:{
        type: String
    }
    });

  const Fieldingcontent = mongoose.model('Fieldingcontent', fieldingSchema);
  module.exports = Fieldingcontent;
  