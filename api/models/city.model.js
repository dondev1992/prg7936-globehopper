const mongoose = require('mongoose');

const citySchema = mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    capital: {
      type: Boolean,
      required: false,
    },
    imageurl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    country: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Country',
      required: true,
    },
    firstlandmark: {
      type: String,
      required: false,
    },
    secondlandmark: {
      type: String,
      required: false,
    },
    thirdlandmark: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const City = mongoose.model('city', citySchema);

module.exports = City;
