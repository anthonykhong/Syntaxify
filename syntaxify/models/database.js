const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      comments: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model("Database", databaseSchema);