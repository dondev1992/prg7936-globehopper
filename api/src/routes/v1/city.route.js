const express = require('express');
const cityController = require('../../controllers/city.controller');

const router = express.Router();

router.route('/').post(cityController.createCity).get(cityController.getAllCities).get(cityController.getCity);

router.route('/cityId').patch(cityController.updateCity).delete(cityController.deleteCity);

module.exports = router;
