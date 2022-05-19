import React, { useEffect, useState } from "react";
import Axios from "../Axios";
import {
  Box,
  CircularProgress,
  Alert,
  AlertTitle,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const AddCountry = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [population, setPopulation] = useState("");
  const [cities, setCities] = useState("");
  const [continent, setContinent] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function createCountry() {
    const newCountry = {
      name,
      description,
      imageurl,
      population,
      cities,
      continent,
    };

    try {
      setLoading(true);
      await Axios.post("/countries/createcountry", newCountry).data;

      setLoading(false);
      setSuccess(true);

      setName("");
      setDescription("");
      setImageurl("");
      setPopulation("");
      setCities("");
      setContinent("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageurlChange = (e) => {
    setImageurl(e.target.value);
  };

  const handlePopulationChange = (e) => {
    setPopulation(e.target.value);
  };

  const handleCitiesChange = (e) => {
    setCities(e.target.value);
  };

  const handleContinentChange = (e) => {
    setContinent(e.target.value);
  };

  return (
    <Box component="div">
      {loading ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
          Uploading Country
        </Box>
      ) : (
        <Box>
          <Box>
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Add Country failed — <strong>Try again!</strong>
              </Alert>
            )}
            {success && (
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>Add Country Successful!</strong>
              </Alert>
            )}
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "left", mt: 2, mb: 1 }}
            >
              Add a new Country
            </Typography>
          </Box>
          <Box>
            <Box display="flex" flexDirection={"column"}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                value={name}
                margin="dense"
                onChange={handleNameChange}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                type="text"
                value={description}
                margin="dense"
                onChange={handleDescriptionChange}
              />
              <TextField
                id="outlined-basic"
                label="ImageURL"
                variant="outlined"
                type="text"
                value={imageurl}
                margin="dense"
                onChange={handleImageurlChange}
              />
              <TextField
                id="outlined-basic"
                label="Population"
                variant="outlined"
                type="text"
                value={population}
                margin="dense"
                onChange={handlePopulationChange}
              />
              <TextField
                id="outlined-basic"
                label="Cities"
                variant="outlined"
                type="text"
                value={cities}
                margin="dense"
                onChange={handleCitiesChange}
              />
              <TextField
                id="outlined-basic"
                label="Continent ID"
                variant="outlined"
                type="text"
                value={continent}
                margin="dense"
                onChange={handleContinentChange}
              />
            </Box>
            <Button
              variant={"contained"}
              onClick={createCountry}
              sx={{ backgroundColor: "purple" }}
            >
              Add Country
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AddCountry;
