const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const countrySchema = mongoose.Schema(
  {
    name: {
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
    population: {
      type: String,
      required: false,
    },
    cities: [],
    continent: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Continent',
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

/**
 * Check if country name already exists
 * @param {string} countryName - The user's email
 * @returns {Promise<boolean>}
 */
countrySchema.statics.doesCountryExist = async function (countryName) {
  const existingCountry = await this.findOne({ name: countryName });
  return !!existingCountry;
};

// add plugin that converts mongoose to json
countrySchema.plugin(toJSON);
countrySchema.plugin(paginate);

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
