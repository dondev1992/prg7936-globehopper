const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

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
continentSchema.plugin(paginate);

const Continent = mongoose.model('continent', continentSchema);

module.exports = Continent;
