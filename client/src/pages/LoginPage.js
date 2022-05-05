import React from "react";
import Input from "../components/Input";
import { Box, Link, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Box className="center-link">
      <Typography component="h1" variant="h3" textAlign="center" marginTop={10}>
        Login
      </Typography>
      <Input />
      <Link
        href="/"
        variant="body1"
        marginTop={1}
        underline="none"
        center="true"
      >
        If you don't have an account, click HERE to register.
      </Link>
    </Box>
  );
};

export default LoginPage;
