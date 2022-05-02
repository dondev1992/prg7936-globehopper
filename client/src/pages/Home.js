import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Card from "../components/Card";
import data from "../data.json";

// data.countries.map((country) => console.log(country));

function Home() {
  useEffect(() => {
    console.log(data[0].countries[0]);
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
        <Typography component="h1" variant="h2">
          Globe Hopper
        </Typography>
        <Typography component="h2" variant="h6">
          The world is at your fingertips
        </Typography>
      </Box>
      <Grid container spacing={4} padding={5}>
        {data.map((data) => (
          <Grid key={data.id} item xs={3}>
            <Card data={data} countries={data.countries} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
