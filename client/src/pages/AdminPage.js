import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Tabs from "../components/Tabs";

function AdminPage() {
  return (
    <Box padding={5}>
      <Paper variant="outlined">
        <Box padding={5}>
          <Typography variant="h4" textAlign={"center"}>
            Admin
          </Typography>
          <hr />
          <Box mt={5}>
            <Tabs />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default AdminPage;
