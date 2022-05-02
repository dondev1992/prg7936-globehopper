import { Box, Paper, Typography } from "@mui/material";
import React from "react";

function ProfilePage() {
  return (
    <Box padding={5}>
      <Paper variant="outlined">
        <Box padding={5}>
          <Typography component="h1" variant="h2" textAlign={"center"}>
            Traveler Profile
          </Typography>
          <hr />
          <Box mt={5}>
            <Typography component="h3" variant="subtitle1">
              <strong>Name: </strong> "Full Name"
            </Typography>
            <Typography component="h3" variant="subtitle1">
              <strong>Email Address: </strong> 'Email Address'
            </Typography>
            <Typography component="h3" variant="subtitle1">
              <strong>Password: </strong> "********"
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography component="h3" variant="subtitle1" sx={{ flex: 1 }}>
                <strong>Travel Preferences: </strong>
              </Typography>
              <Typography component="h4" variant="body1" sx={{ flex: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur magni beatae sint suscipit accusantium temporibus,
                dolorum corrupti, impedit reiciendis quasi esse, saepe ut nam
                sed omnis incidunt voluptates maxime minus quidem aspernatur?
                Dolorem incidunt ipsam earum beatae tempora natus unde corporis
                quasi? Laborum velit dolores, quis in minus aliquam reiciendis!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProfilePage;
