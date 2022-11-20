const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    user_id:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
    });
  const Comments = mongoose.model('Comments', commentSchema);
  module.exports = Comments;
  



