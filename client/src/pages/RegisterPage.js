import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Axios from "../Axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  async function handleRegistration() {
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      const user = {
        name,
        email,
        password,
      };

      try {
        setLoading(true);
        await Axios.post("/users/register", user).data;
        setLoading(false);
        setSuccess(true);

        setName("");
        setEmail("");
        setPassword("");
        const result = (await Axios.post("/users/login", user)).data;
        const resultObj = JSON.stringify(result);
        localStorage.setItem("currentUser", resultObj);

        window.location.href = "/";
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Registration failed — <strong>Try again!</strong>
        </Alert>
      )}
      {success && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>Registration Successful!</strong>
        </Alert>
      )}
      {loading ? (
        <CircularProgress />
      ) : (
        <Box className="center-link">
          <Typography
            component="h1"
            variant="h3"
            textAlign="center"
            marginTop={10}
          >
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
              onClick={handleRegistration}
              sx={{ backgroundColor: "purple" }}
            >
              Register
            </Button>
          </Container>

          <Link
            to="/"
            variant="body1"
            marginTop={1}
            underline="none"
            center="true"
          >
            If you have an account, click HERE to login.
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default RegisterPage;
