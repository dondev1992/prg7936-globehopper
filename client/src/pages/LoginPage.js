import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {};
  return (
    <Box className="center-link">
      <Typography component="h1" variant="h3" textAlign="center" marginTop={10}>
        Login
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <TextField
          required
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          margin="dense"
        />
        <TextField
          required
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="dense"
        />
        <Button
          variant={"contained"}
          onClick={() => handleLogin}
          sx={{ backgroundColor: "purple" }}
        >
          Login
        </Button>
      </Container>
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
