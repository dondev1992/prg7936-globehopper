import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setName(e.target.value);
  };

  const handleLogin = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <TextField
        required
        md={4}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="name"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button variant={"contained"} onClick={() => handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
