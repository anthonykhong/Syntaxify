const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = mongoose.model("Comment", commentSchema);
const Documentation = mongoose.model("Documentation", documentationSchema);
const ensureLoggedIn = require('../config/ensureLoggedIn');

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    name: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const documentationSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    timestamps: true
  }
);


module.exports = { 
  Comment, 
  Documentation 
};
