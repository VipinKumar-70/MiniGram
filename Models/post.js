const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  content: String,
  image: String,
  createdAt: {
    type: Date,
    default: date.now,
  },
  user: [
    {
      type: mongoose.Schema.Types.OjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("post", postSchema);
