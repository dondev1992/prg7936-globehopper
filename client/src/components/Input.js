import React from "react";
import { Box, Button, Container, Link, TextField } from "@mui/material";
import { useState } from "react";

const Input = () => {
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
        Login
      </Button>
    </Container>
  );
};

export default Input;
