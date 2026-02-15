const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    caption: String,
    image: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("post", postSchema);
