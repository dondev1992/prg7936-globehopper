const mongoose = require('mongoose');

const citySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    capitol: {
      type: String,
    },
    country: {
      type: String,
    },
    imageurl: {
      type: String,
    },
    firstlandmark: {
      type: String,
    },
    secondlandmark: {
      type: String,
    },
    thirdlandmark: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = city;
