const express = require("express");
const Country = require("../models/country.model");

const router = express.Router();

//Create a country
router.post("/createcountry", async (req, res) => {
  await Country(req.body).save();
  res.status(200).send("Country added successfully!");
});

//Get all countries
router.get("/getcountries", async (req, res) => {
  try {
    const countries = await Country.find();
    return res.send(countries);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//Get a country
router.get("/getcountry/:name", async (req, res) => {
  const country = await Country.findOne({ name: req.params.name });
  res.send(country);
});

//Get all cities
router.get("/getallcitiesbyuser/:name", async (req, res) => {
  const foundCities = await Country.find({ name: req.params.name }).populate(
    "Cities"
  );
  res.send(foundCities);
});

//Update a country
router.put("/updatecountry/:id", async (req, res) => {
  await Country.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).send("Country updated successfully!");
});

//Delete a country
router.delete("/deletecountry/:id", async (req, res) => {
  await Country.findByIdAndDelete(req.params.id);
  res.status(200).send("Country updated successfully!");
});

module.exports = router;
