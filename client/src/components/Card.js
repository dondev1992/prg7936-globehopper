import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Modal from "../components/Modal";

function Card({ continent }) {
  return (
    <Box
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper className="card" elevation={12}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" component="h3">
            <Modal continent={continent} />
          </Typography>
        </Box>

        <Box px={3} pb={3}>
          <img src={continent.imageurl} alt="map" className="home-image" />
        </Box>
      </Paper>
    </Box>
  );
}

export default Card;
