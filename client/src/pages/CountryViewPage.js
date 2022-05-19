import { Box, Container, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "../Axios";

function CountryViewPage() {
  const location = useLocation();
  const { countryName = "defaultValue" } = location.state || {};
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = (
          await Axios.get(`/countries/getcountry/${countryName}`)
        ).data;
        setCountry(response);

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
  }, [countryName]);

  console.log();
  return (
    <Container>
      {isLoading && <CircularProgress />}
      {country && (
        <Box my={3}>
          <Typography variant="h3" component="h1">
            {country.name}
          </Typography>
          <hr />
          <Box mt={5}>
            <img className="city-image" src={country.imageurl} alt="city" />
            <Typography mt={2} component="p" variant="p" width={"80%"}>
              {country.description}
            </Typography>
            <Typography variant="subtitle1" component="h5" mt={2}>
              Population: {country.population}
            </Typography>
            <Typography variant="subtitle1" component="h5" mt={1}>
              Popular Cities:
            </Typography>
          </Box>
          <Box mt={2}>
            <ul>
              {country.cities.map((cityName) => (
                <li key={cityName}>
                  <Link to={`/city/${cityName}`} state={{ cityName }}>
                    {cityName}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default CountryViewPage;
