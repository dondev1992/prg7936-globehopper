const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

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

// add plugin that converts mongoose to json
citySchema.plugin(toJSON);

const City = mongoose.model('City', citySchema);

module.exports = City;
