import { Box, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "../Axios";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const id = user?._id;
  useEffect(() => {
    //Retreive user data

    async function fetchData() {
      try {
        setLoading(true);

        const data = (await Axios.get(`/users/getusers/${id}`)).data;
        setUserData(data);

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Box padding={5}>
      <Paper variant="outlined">
        <Box padding={5}>
          <Typography component="h1" variant="h3" textAlign={"center"}>
            Traveler Profile
          </Typography>
          <hr />
          <Box mt={5}>
            <Typography component="h3" variant="subtitle1">
              <strong>Name: </strong> {userData?.name}
            </Typography>
            <Typography component="h3" variant="subtitle1">
              <strong>Email Address: </strong> {userData?.email}
            </Typography>
            <Typography component="h3" variant="subtitle1">
              <strong>Password: </strong> {userData?._id}
            </Typography>
            <Typography component="h3" variant="subtitle1">
              <strong>Admin: </strong>
              {userData?.admin ? "Yes" : "No"}
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
              <TextField
                required
                variant="outlined"
                type="text"
                // value={description}
                // onChange={handleDescriptionChange}
                defaultValue="loreLorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor tenetur, ex, similique numquam fuga odio cumque quae dolores pariatur inventore repudiandae, quia ipsa exercitationem."
                margin="dense"
                sx={{ minWidth: 700 }}
                multiline
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProfilePage;
