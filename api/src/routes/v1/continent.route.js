const express = require('express');
const continentController = require('../../controllers/continent.controller');

const router = express.Router();

router.route('/').get(continentController.getAllContinents);

module.exports = router;
