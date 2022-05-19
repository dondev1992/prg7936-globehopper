import React, { useEffect, useState } from "react";
import Axios from "../Axios";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";

function Home() {
  const [allContinents, setAllContinents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const fetchContinents = async () => {
      try {
        const response = await Axios.get("/continents/getcontinents");
        setAllContinents(response.data);
        setIsLoading(false);
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
    fetchContinents();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={10}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingTop={5}
        >
          <Typography component="h2" variant="h3" mb={3}>
            The world is at your fingertips
          </Typography>
          <Grid container spacing={4} mt={1} px={5}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <SearchBox />
            </Grid>
            {allContinents &&
              allContinents.map((continent) => (
                <Grid key={continent._id} item xs={4}>
                  <Card continent={continent} />
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Home;
