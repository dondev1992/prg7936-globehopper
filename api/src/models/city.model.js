const mongoose = require('mongoose');

const citySchema = mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
    },
    description: {
      type: String,
    },
    country: {
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
