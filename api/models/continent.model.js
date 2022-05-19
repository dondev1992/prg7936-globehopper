const mongoose = require('mongoose');

const continentSchema = mongoose.Schema(
  {
    continent: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    countries: [],
    type: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Continent = mongoose.model('continent', continentSchema);

module.exports = Continent;
