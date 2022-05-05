import React from "react";
import Input from "../components/Input";
import { Box, Link, Typography } from "@mui/material";

const RegisterPage = () => {
  return (
    <Box className="center-link">
      <Typography component="h1" variant="h3" textAlign="center" marginTop={10}>
        Register
      </Typography>
      <Input />

      <Link
        href="/"
        variant="body1"
        marginTop={1}
        underline="none"
        center="true"
      >
        If you have an account, click HERE to login.
      </Link>
    </Box>
  );
};

export default RegisterPage;
