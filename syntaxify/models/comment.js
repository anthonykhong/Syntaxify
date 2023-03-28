const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
      text: {
        type: String,
        // required: true,
      },
      name: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
);
  
module.exports =  mongoose.model("Comment", commentSchema);