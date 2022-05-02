import React from "react";
import { Paper, Typography } from "@mui/material";
import Modal from "../components/Modal";

function Card({ data, countries }) {
  return (
    <div>
      <Paper
        sx={{
          padding: "1rem",
        }}
        className="card"
        elevation={5}
      >
        <Typography variant="h5" component="h3">
          <Modal data={data} countries={countries} />
        </Typography>

        <img src={data.imageurl} alt="map" className="home-image" />
      </Paper>
    </div>
  );
}

export default Card;
