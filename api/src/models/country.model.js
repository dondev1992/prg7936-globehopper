const mongoose = require('mongoose');

const countrySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
    },
    description: {
      type: String,
    },
    population: {
      type: String,
    },
    cities: [],
    population: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = country;
