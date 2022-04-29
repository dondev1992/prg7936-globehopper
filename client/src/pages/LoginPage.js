import React from "react";
import Login from "../components/Login";
import { Box, TextField } from "@mui/material";

const LoginPage = () => {
  return (
    <Box>
      <Box component="h1" variant="h1">
        Login
      </Box>
      <Login />
    </Box>
  );
};

export default LoginPage;
