import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import data from "../data.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function EditCountry() {
  const [continent, setContinent] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState(country.name);
  const [imageurl, setImageurl] = useState(country.imageurl);
  const [population, setPopulation] = useState(country.population);
  const [description, setDescription] = useState(country.description);

  const handleChange = (event) => {
    setContinent(event.target.value);

    setCountries(continent.countries);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };
  const handleImageurlChange = (event) => {
    setImageurl(event.target.value);
  };
  const handlePopulationChange = (event) => {
    setPopulation(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  console.log(country);
  return (
    <Box>
      {/* <Typography variant="h4" component="h3">
        Edit Country
      </Typography> */}
      <Box>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="large">
          <InputLabel id="demo-simple-select-label">Pick Continent</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={continent}
            label="Pick Continent"
            onChange={handleChange}
          >
            {data.map((continent) => (
              <MenuItem key={continent.id} value={continent}>
                {continent.continent}
              </MenuItem>
            ))}
            <MenuItem value={100}>None</MenuItem>
          </Select>
        </FormControl>

        {continent && (
          <Box>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="large">
              <InputLabel id="demo-simple-select-label">
                Pick Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Pick Country"
                onChange={handleCountryChange}
              >
                {continent.countries.map((country) => (
                  <MenuItem key={country.id} value={country}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        {country ? (
          <Box>
            <Typography mt={2}>
              <strong>Name:</strong>
            </Typography>
            <TextField
              required
              variant="outlined"
              type="text"
              value={countryName}
              onChange={handleCountryNameChange}
              defaultValue={country.name}
              margin="dense"
            />
            <Typography mt={1}>
              <strong>Image URL:</strong>
            </Typography>
            <TextField
              required
              variant="outlined"
              type="text"
              value={imageurl}
              onChange={handleImageurlChange}
              defaultValue={country.imageurl}
              margin="dense"
            />
            <Typography mt={1}>
              <strong>Population:</strong>
            </Typography>
            <TextField
              required
              variant="outlined"
              type="text"
              value={population}
              onChange={handlePopulationChange}
              defaultValue={country.population}
              margin="dense"
            />
            <Typography mt={1}>
              <strong>Description:</strong>
            </Typography>
            <TextField
              required
              variant="outlined"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              defaultValue={country.description}
              margin="dense"
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default EditCountry;
