const httpStatus = require('http-status');
const { City } = require('../models');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const createCity = catchAsync(async (req, res) => {
  if (await City.doesCityExist(req.body.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'City name already taken');
  }
  const newCity = City.create(req.body);
  res.status(httpStatus.CREATED).send(newCity);
});

const getAllCities = async (req, res) => {
  const result = await City.find({});
  res.send(result);
};

const getCity = catchAsync(async (req, res) => {
  const city = await City.getCityById(req.params.city);
  if (!city) {
    throw new ApiError(httpStatus.NOT_FOUND, 'City not found');
  }
  res.send(city);
});

const updateCity = catchAsync(async (req, res) => {
  const city = await City.updateCityById(req.params.cityId);
  if (!city) {
    throw new ApiError(httpStatus.NOT_FOUND, 'City not found');
  }
  Object.assign(city, req.body);
  await city.save();

  res.send(city);
});

const deleteCity = catchAsync(async (req, res) => {
  const city = await City.findById(req.params.cityId);
  if (!city) {
    throw new ApiError(httpStatus.NOT_FOUND, 'City not found');
  }
  await city.remove();
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getAllCities,
  createCity,
  updateCity,
  deleteCity,
  getCity,
};
