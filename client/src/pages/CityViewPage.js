import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function CityViewPage(props) {
  const location = useLocation();
  const { city = "defaultValue" } = location.state || {};
  return (
    <Container>
      <Box my={3}>
        <Typography variant="h3" component="h1">
          {city.city}
        </Typography>
        <hr />
        <Box mt={5}>
          <img className="city-image" src={city.imageurl} alt="city" />
          <Typography component="p" variant="p" mt={2} width={"60%"}>
            {city.description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default CityViewPage;
