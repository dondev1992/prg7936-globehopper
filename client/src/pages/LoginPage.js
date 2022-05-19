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
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  let navigate = useNavigate();

  async function handleLogin() {
    const user = {
      email,
      password,
    };

    try {
      setLoading(true);
      const result = (await Axios.post("/users/login", user)).data;

      setLoading(false);
      setError(false);
      const resultObj = JSON.stringify(result);
      localStorage.setItem("currentUser", resultObj);

      window.location.href = "/";
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }

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
          Login failed — <strong>Try again!</strong>
        </Alert>
      )}
      {success && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>Login Successful!</strong>
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
              onClick={handleLogin}
              sx={{ backgroundColor: "purple" }}
            >
              Login
            </Button>
          </Container>
          <Link
            href="register"
            variant="body1"
            marginTop={1}
            underline="none"
            center="true"
          >
            If you don't have an account, click HERE to register.
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;
