const mongoose = require("mongoose");

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
      ref: "Continent",
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const Country = mongoose.model("country", countrySchema);

module.exports = Country;
