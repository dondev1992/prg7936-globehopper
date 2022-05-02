import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function CityViewPage(props) {
  const location = useLocation();
  const { city = "defaultValue" } = location.state || {};
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h2" component="h1">
          {city.city}
        </Typography>
        <hr />
        <Box mt={5}>
          <img className="city-image" src={city.imageurl} alt="city" />
          <Typography component="p" variant="p" mt={2} width={"80%"}>
            {city.description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default CityViewPage;
