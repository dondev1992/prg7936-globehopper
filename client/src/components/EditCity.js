import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function EditCity() {
  const [cities, setCities] = useState([]);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState(city.city);
  const [imageurl, setImageurl] = useState(city.imageurl);
  const [firstLandmark, setFirstLandmark] = useState(city.firstlandmark);
  const [secondLandmark, setSecondLandmark] = useState(city.secondlandmark);
  const [thirdLandmark, setThirdLandmark] = useState(city.thirdlandmark);
  const [description, setDescription] = useState(city.description);

  //   useEffect(() => {
  //     setCountries(listCountries);
  //   }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);

    // setCities(country.cities);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleCityNameChange = (event) => {
    setCityName(event.target.value);
  };
  const handleFirstLandmarkChange = (event) => {
    setFirstLandmark(event.target.value);
  };
  const handleImageurlChange = (event) => {
    setImageurl(event.target.value);
  };
  const handleSecondLandmarkChange = (event) => {
    setSecondLandmark(event.target.value);
  };
  const handleThirdLandmarkChange = (event) => {
    setThirdLandmark(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  //   console.log(city);
  //   console.log(listCountries);
  //   const listCountries = data.map((continent) =>
  //     continent.countries.map((country) => country.name)
  //   );
  //   const c = listCountries[1].map((country) => country.name);
  //   console.log(listCountries);
  return (
    <Box>
      <Box>
        <FormControl sx={{ minWidth: 400 }} size="large">
          <Typography mt={2}>
            <strong>Pick country:</strong>
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            onChange={handleChange}
          >
            {data.map((continent) =>
              continent.countries.map((country) => (
                <MenuItem key={country.id} value={country}>
                  {country.name}
                </MenuItem>
              ))
            )}
            {/* {/* {listCountries?.map((country) => (
              <MenuItem key={country.id} value={country}>
                {country.name}
              </MenuItem>
            ))} */}
            <MenuItem value={100}>none</MenuItem> */}
          </Select>
        </FormControl>

        {country && (
          <Box>
            <FormControl sx={{ minWidth: 400 }} size="large">
              <Typography mt={2}>
                <strong>Pick city:</strong>
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                onChange={handleCityChange}
              >
                {country.cities.map((city) => (
                  <MenuItem key={city.id} value={city}>
                    {city.city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        {city ? (
          <Box>
            <Typography mt={2}>
              <strong>Name:</strong>
            </Typography>
            <TextField
              required
              variant="outlined"
              type="text"
              value={cityName}
              onChange={handleCityNameChange}
              defaultValue={city.city}
              margin="dense"
              sx={{ minWidth: 400 }}
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
              defaultValue={city.imageurl}
              margin="dense"
              sx={{ minWidth: 400 }}
            />
            <Typography mt={1}>
              <strong>Landmarks:</strong>
            </Typography>
            <TextField
              required
              variant="outlined"
              type="text"
              value={firstLandmark}
              onChange={handleFirstLandmarkChange}
              defaultValue={city.firstlandmark}
              margin="dense"
              sx={{ minWidth: 400 }}
            />
            <br />
            <TextField
              required
              variant="outlined"
              type="text"
              value={secondLandmark}
              onChange={handleSecondLandmarkChange}
              defaultValue={city.secondlandmark}
              margin="dense"
              sx={{ minWidth: 400 }}
            />
            <br />
            <TextField
              required
              variant="outlined"
              type="text"
              value={thirdLandmark}
              onChange={handleThirdLandmarkChange}
              defaultValue={city.thirdlandmark}
              margin="dense"
              sx={{ minWidth: 400 }}
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
              sx={{ minWidth: 700 }}
              multiline
            />
          </Box>
        ) : null}
      </Box>
      <Box mt={2}>
        <Button variant="contained" sx={{ backgroundColor: "purple" }}>
          Submit Changes
        </Button>
      </Box>
    </Box>
  );
}

export default EditCity;
