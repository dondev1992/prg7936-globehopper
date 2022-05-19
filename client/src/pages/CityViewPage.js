import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Axios from "../Axios";

function CityViewPage(props) {
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState();
  const location = useLocation();
  const { cityName = "defaultValue" } = location.state || {};

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = (await Axios.get(`/cities/getcity/${cityName}`)).data;
        setCity(response);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        if (error.response) {
          //Not in 200 response range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error: ${error.message}`);
        }
      }
    };
    fetchCountryData();
  }, [cityName]);

  return (
    <Container>
      {isLoading && <CircularProgress />}
      {city && (
        <Box my={3}>
          <Typography variant="h3" component="h1">
            {city.city}
          </Typography>
          <hr />
          <Box mt={5}>
            <img className="city-image" src={city.imageurl} alt="city" />
            <Typography component="p" variant="p" mt={2} width={"80%"}>
              {city.description}
            </Typography>
            <Typography component="p" variant="p" mt={2}>
              <strong>Capital: {city.capital ? "Yes" : "No"}</strong>
            </Typography>
            <Typography component="p" variant="p" mt={2} mb={1}>
              <strong>Landmarks:</strong>
            </Typography>
            <Typography component="p" variant="p">
              {city.firstlandmark}
              <br />
              {city.secondlandmark}
              <br />
              {city.thirdlandmark}
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default CityViewPage;
