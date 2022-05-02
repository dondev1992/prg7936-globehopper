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

  const handleChange = (event) => {
    setContinent(event.target.value);

    setCountries(continent.countries);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
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
              <strong>Name:</strong> {country.name}
            </Typography>
            <Typography mt={1}>
              <strong>Image URL:</strong> "{country.imageurl}"
            </Typography>
            <Typography mt={1}>
              <strong>Population:</strong> {country.population}
            </Typography>
            <Typography mt={1}>
              <strong>Description:</strong> {country.description}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default EditCountry;
