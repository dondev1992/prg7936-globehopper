const express = require("express");
const Continent = require("../models/continent.model");

const router = express.Router();

//Get all continents
router.get("/getcontinents?", async (req, res) => {
  const continents = await Continent.find();
  res.send(continents);
});

//Get a continent
router.get("/getcontinents/:id", async (req, res) => {
  const continent = await Continent.findById(req.params.id);
  res.send(continent);
});

module.exports = router;
