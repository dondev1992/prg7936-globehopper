import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
        Register
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
          label="Name"
          variant="outlined"
          type="name"
          value={name}
          onChange={handleNameChange}
          margin="dense"
        />
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
          Register
        </Button>
      </Container>

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
