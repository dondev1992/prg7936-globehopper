import { Box, Button } from "@mui/material";
import React from "react";

function Logout() {
  function logOut() {
    localStorage.removeItem("currentUser");
    window.location.ref = "/";
  }
  return (
    <Box>
      <Button color="inherit" onClick={() => logOut}>
        Log Out
      </Button>
    </Box>
  );
}

export default Logout;
