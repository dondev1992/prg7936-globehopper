import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CountryViewPage() {
  const location = useLocation();
  const { country = "defaultValue" } = location.state || {};
  //   const [countryName, setCountryName] = useState("");
  //   const [countryDescription, setCountryDescription] = useState("");

  //   useEffect(() => {
  //     setCountryName(country.name);
  //     setCountryDescription(country.description);
  //   }, []);
  return (
    <Container>
      <Box my={3}>
        <Typography variant="h3" component="h1">
          {country.name}
        </Typography>
        <hr />
        <Box mt={5}>
          <img className="city-image" src={country.imageurl} alt="city" />
          <Typography mt={2} component="p" variant="p" width={"60%"}>
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
            {country.cities.map((city) => (
              <li key={city.id}>
                <Link to="/city" state={{ city }}>
                  {city.city}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Container>
  );
}

export default CountryViewPage;
