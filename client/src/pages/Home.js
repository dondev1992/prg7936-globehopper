import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import data from "../data.json";

// data.countries.map((country) => console.log(country));

function Home() {
  const [continents, setContinents] = useState();
  useEffect(() => {
    fetch("/v1/continents")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingTop={10}
      >
        <Typography component="h2" variant="h3">
          The world is at your fingertips
        </Typography>
      </Box>
      <Grid container spacing={4} padding={5} mt={3}>
        {data.map((continent) => (
          <Grid key={continent.id} item xs={3}>
            <Card data={continent} countries={data.countries} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
