const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    userName: String,
    userAvatar: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const databaseSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      comments: [commentSchema],
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model("Database", databaseSchema);