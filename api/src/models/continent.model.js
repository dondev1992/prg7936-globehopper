const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

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

// add plugin that converts mongoose to json
continentSchema.plugin(toJSON);

const Continent = mongoose.model('Continent', continentSchema);

module.exports = Continent;
