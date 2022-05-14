const httpStatus = require('http-status');
const { Continent } = require('../models');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const getAllContinents = async (req, res) => {
  const result = await Continent.find({});
  return res.send(result);
};

const getContinent = catchAsync(async (req, res) => {
  const continent = await Continent.getContinentById(req.params.continent);
  if (!continent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Continent not found');
  }
  res.send(continent);
});

module.exports = {
  getAllContinents,
  getContinent,
};
