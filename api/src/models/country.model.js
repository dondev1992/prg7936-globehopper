const mongoose = require('mongoose');

const countrySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    listofcities: [],
    population: {
      type: String,
    },
    imageurl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = country;
