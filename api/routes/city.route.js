const express = require("express");
const City = require("../models/city.model");

const router = express.Router();

//Create a city
router.post("/newcity", async (req, res) => {
  await City(req.body).save();
  res.status(200).send("City added successfully!");
});

//Get all cities
router.get("/getcities", async (req, res) => {
  const cities = await City.find();
  res.send(cities);
});

//Get a city
router.get("/getcity/:city", async (req, res) => {
  const city = await City.findOne({ city: req.params.city });
  res.send(city);
});

//Update a city
router.put("/updatecity/:id", async (req, res) => {
  await City.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).send("City updated successfully!");
});

//Delete a city
router.delete("/deletecity/:id", async (req, res) => {
  await City.findByIdAndDelete(req.params.id);
  res.status(200).send("City updated successfully!");
});

module.exports = router;
